import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { formValueConfig } from '@shared/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env['NODE_ENV'] !== 'production') {
  require('dotenv').config();
}

// Read HTML template
const templatePath = join(__dirname, '../browser/assets/email-templates/emailTemplate.html');
const toMeTemplatePath = join(__dirname, '../browser/assets/email-templates/adminEmailTemplate.html');

let emailTemplate = readFileSync(templatePath, 'utf8');
let toMeEmailTemplate = readFileSync(toMeTemplatePath, 'utf8');

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Middleware to parse JSON bodies
  server.use(express.json());

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '**',
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: 'index.html',
    })
  );

  // Function to replace multiple placeholders
  function replacePlaceholders(
    template: string,
    replacements: { [key: string]: string }
  ): string {
    return template.replace(
      /{{(.*?)}}/g,
      (_, key) => replacements[key.trim()] || ''
    );
  }

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  // Set up Nodemailer transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env['EMAIL_USER'],
      pass: process.env['EMAIL_PASSWORD'],
    },
    authMethod: 'PLAIN',
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('Transporter connection error:', error);
    } else {
      console.log('Server is ready to take our messages:', success);
    }
  });

  server.post('/send-email', (req, res) => {
    console.log(req.body as formValueConfig);

    const subject = `Thanks ${req.body.name}`;
    const message = `Hi ${req.body.name}, thank you for reaching out.`;

    // Replace placeholders in the email template
    const replacements = {
      name: req.body.name,
      email: req.body.email,
      looking: req.body.looking,
    };

    // Replace placeholders in the email template
    const htmlContent = replacePlaceholders(emailTemplate, replacements);
    const toMeHtmlContent = replacePlaceholders(toMeEmailTemplate, replacements);

    const mailOptions = {
      from: process.env['EMAIL_USER'],
      to: req.body.email,
      subject: subject,
      text: message,
      html: htmlContent,
      // html: `<p>${message}</p>`
    };

    const mailOptionsSelf = {
      from: process.env['EMAIL_USER'],
      to: process.env['EMAIL_USER'], // Send to yourself
      subject: `New Contact Form Submission from ${req.body.name}`,
      text: `You have received a new contact form submission:\n\nName: ${req.body.name}\nEmail: ${req.body.email}\nLooking for: ${req.body.looking}`,
      html: toMeHtmlContent,
    };

     // Send email to the recipient
     transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Error sending email to recipient', details: error });
      } else {
        console.log('Email sent to recipient: ' + info.response);

        // Send email to yourself
        transporter.sendMail(mailOptionsSelf, (selfError, selfInfo) => {
          if (selfError) {
            console.log(selfError);
            res.status(500).json({ error: 'Error sending email to self', details: selfError });
          } else {
            console.log('Email sent to self: ' + selfInfo.response);
            res.status(200).json({ message: 'Emails sent successfully' });
          }
        });
      }
    });

  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
