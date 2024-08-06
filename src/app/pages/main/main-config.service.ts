import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { headerConfig } from './components';
import { AboutConfig, CarouselConfig, ContactConfig, FooterConfig, ReviewsConfig, TechnologiesConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class MainConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);

    getPageConfig(): Main {
      return {
        navbar: this.defaultConfigService.getRegularNavbar(),
        header: {
          h1: 'Hello I\'m',
          h2: 'GUY TAGGER',
          h3: 'A FRONTEND DEVELOPER <span>|</span> UI/UX DESIGNER <span>|</span> ILLUSTRATOR',
          ctaJob: {
            text: 'Let\'s Create Something Great!',
            size: 'default',
            color: 'yellow',
            ariaLabel: 'string',
            scrollTo: 'contact',
            showIconRight: true,
            iconRight: 'flag',
            showIconLeft: false
          }
        },
        about: {
          title: 'Who am i?',
          subtitle: 'About',
          paragraphs: [
            'Welcome to my portfolio! I\'m Guy Tagger, a Front-End Developer and UI/UX Designer with a knack for crafting beautiful and functional websites and apps.',
            'I build responsive, mobile-friendly sites using Angular, HTML, SCSS, JavaScript, and TypeScript, always following best practices for clean and efficient code.',
            'When it comes to design, I use Figma, Adobe XD, Illustrator, and Photoshop to create wireframes, mockups, interactive prototypes, animations, logos, slides, and other branding materials, ensuring top-notch user experiences. I stay up-to-date with the latest design trends to deliver modern and innovative solutions.'
          ],
          img: {
            src: 'assets/images/about.webp',
            alt: 'Guy Tagger profile photo'
          }

        },
        projects: {
          title: 'what I\'ve created',
          subtitle: 'Projects',
          subjects: [
            {
              title: 'Tierro',
              description: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
              responsibilities: [
                'UX & UI Design',
                'Logo',
                'Web Development'
              ],
              cta: {
                text: 'Take Me To The Project',
                size: 'default',
                color: 'yellow',
                ariaLabel: 'Go to Tierro case study',
                inLink: 'projects/tierro',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false,
                targetStyle: '_blank'
              },
              previewImg: {
                src: 'assets/images/projects/tierro/preview.webp',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'Tierro project logo'
              }
            },
            {
              title: 'BrushAlong',
              description: 'A fun brushing tracker game app designed for children, making dental hygiene engaging and enjoyable. This project also includes an intuitive tracking system for parents to easily monitor and manage their children\'s brushing habits.',
              responsibilities: [
                'UX & UI Design',
                'Illustration',
                'Prototype'
              ],
              cta: {
                text: 'Take Me To The Project',
                size: 'default',
                color: 'yellow',
                ariaLabel: 'Go to Tierro case study',
                inLink: 'projects/brushalong',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false,
                targetStyle: '_blank'
              },
              previewImg: {
                src: 'assets/images/projects/brush-along/preview.webp',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/brush-along/symbol.webp',
                alt: 'Tierro project logo'
              }
            },
            {
              title: 'Portfolio',
              description: 'An engaging and interactive personal portfolio, showcasing a range of design and development skills. This project highlights my various projects, services offered, and provides an insight into my background and expertise.',
              responsibilities: [
                'UX & UI Design',
                'Illustration',
                'Web Development'
              ],
              cta: {
                text: 'Take Me To The Project',
                size: 'default',
                color: 'yellow',
                ariaLabel: 'Go to portfolio case study',
                inLink: 'projects/portfolio',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false,
                targetStyle: '_blank'
              },
              previewImg: {
                src: 'assets/images/projects/portfolio/preview.webp',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/portfolio/logo.svg',
                alt: 'Tierro project logo'
              }
            },
            // {
            //   title: 'WeRLive',
            //   description: 'An asdasdasdr a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
            //   responsibilities: [
            //     'UX & UI Design',
            //     'Logo',
            //     'Web Development'
            //   ],
            //   cta: {
            //     text: 'Take Me To The Project',
            //     size: 'default',
            //     color: 'yellow',
            //     ariaLabel: 'Go to Tierro case study',
            //     inLink: 'projects/werlive',
            //     showIconRight: true,
            //     iconRight: 'east',
            //     showIconLeft: false
            //   },
            //   previewImg: {
            //     src: 'assets/images/projects/tierro/preview.webp',
            //     alt: 'Tierro project - preview image'
            //   },
            //   iconImg: {
            //     src: 'assets/images/projects/tierro/logo-color.svg',
            //     alt: 'Tierro project logo'
            //   }
            // },
            // {
            //   title: 'CyberGhost',
            //   description: 'An asdasdasdr a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
            //   responsibilities: [
            //     'UX & UI Design',
            //     'Logo',
            //     'Web Development'
            //   ],
            //   cta: {
            //     text: 'Take Me To The Project',
            //     size: 'default',
            //     color: 'yellow',
            //     ariaLabel: 'Go to Tierro case study',
            //     inLink: 'projects/cyberghost',
            //     showIconRight: true,
            //     iconRight: 'east',
            //     showIconLeft: false
            //   },
            //   previewImg: {
            //     src: 'assets/images/projects/tierro/preview.webp',
            //     alt: 'Tierro project - preview image'
            //   },
            //   iconImg: {
            //     src: 'assets/images/projects/tierro/logo-color.svg',
            //     alt: 'Tierro project logo'
            //   }
            // },
            {
              title: 'TCAbility',
              description: 'A comprehensive project for TCAbility, featuring a brand website that adheres to the latest WCAG 2.2 standards. This project includes designing and developing the site, creating the logo, and embedding accessibility features, showcasing TCAbility’s expertise in accessible digital design.',
              responsibilities: [
                'UX & UI Design',
                'Logo',
                'Illustration',
                'Accessibility',
                'Web Development'
              ],
              cta: {
                text: 'Coming Soon',
                size: 'default',
                color: 'disable-white',
                ariaLabel: 'Coming soon',
                inLink: '',
                showIconRight: true,
                iconRight: 'pending',
                showIconLeft: false
              },
              previewImg: {
                src: 'assets/images/projects/tcability/preview.webp',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tcability/logo-white.svg',
                alt: 'Tierro project logo'
              }
            }
          ]
        },
        services: {
          title: 'What I do?',
          subtitle: 'Services',
          subjects: [
            {
              longTitle: 'UI/UX Design',
              title: 'UI/UX',
              description: 'Creating intuitive and engaging user experiences with a focus on aesthetics and functionality. I craft wireframes, mockups, and interactive prototypes to bring ideas to life and ensure a seamless user journey. My designs adhere to WCAG 2.2 guidelines to guarantee accessibility for all users.',
              previewImg: {
                src: 'assets/images/services/uiux.webp',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Graphic Design',
              title: 'Graphics',
              description: 'Designing visually stunning logos, slides, and branding materials. Using tools like Illustrator and Photoshop, I create cohesive and impactful visual identities for brands.',
              previewImg: {
                src: 'assets/images/services/uiux.webp',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Illustrations',
              title: 'Illustrations',
              description: ' If you need custom artwork, icons, or infographics, I’ve got you covered. I create unique illustrations that add personality and visual appeal to your brand, making your content more engaging and memorable.',
              previewImg: {
                src: 'assets/images/services/uiux.webp',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Interactive Design & Development',
              title: 'Interactive',
              description: 'Want to make your website or app fun and engaging? I’m here to help. I create dynamic designs with animations and interactive elements that will captivate your users and provide a memorable experience.',
              previewImg: {
                src: 'assets/images/services/uiux.webp',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Design Consulting',
              title: 'Consulting',
              description: 'Offering expert advice on design strategy, usability, and aesthetics. I help businesses and individuals refine their digital products to meet user needs and achieve their goals.',
              previewImg: {
                src: 'assets/images/services/uiux.webp',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Front-End Development',
              title: 'Front-End',
              description: 'Building responsive, mobile-friendly websites using Angular, HTML, SCSS, JavaScript, and TypeScript. I follow best practices to deliver clean, efficient, and maintainable code for high-performance web applications.',
              previewImg: {
                src: 'assets/images/services/uiux.webp',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Back-End Development',
              title: 'Back-End',
              description: 'Developing robust and scalable server-side applications using Node.js. I ensure seamless integration with front-end systems, utilizing APIs for efficient data exchange, and maintain best practices in security and performance.',
              previewImg: {
                src: 'assets/images/services/uiux.webp',
                alt: 'a hand holding a smartphone with uiux design'
              }
            }
          ]
        },
        technologies: {
          title: 'My Tech Toolbox',
          subtitle: 'Technologies',
          technologies: [
            {
              title: 'Bootstrap',
              img: {
                src: 'assets/images/technologies/bootstrap-logo-white.svg',
                alt: 'Bootstrap icon'
              }
            },
            {
              title: 'SCSS',
              img: {
                src: 'assets/images/technologies/scss-logo-white.svg',
                alt: 'SCSS icon'
              }
            },
            {
              title: 'CSS3',
              img: {
                src: 'assets/images/technologies/css3-logo-white.svg',
                alt: 'CSS3 icon'
              }
            },
            {
              title: 'HTML5',
              img: {
                src: 'assets/images/technologies/html5-logo-white.svg',
                alt: 'HTML5 icon'
              }
            },
            {
              title: 'Figma',
              img: {
                src: 'assets/images/technologies/figma-logo-white.svg',
                alt: 'Figma icon'
              }
            },
            {
              title: 'Canva',
              img: {
                src: 'assets/images/technologies/canva-logo-white.svg',
                alt: 'Figma icon'
              }
            },
            {
              title: 'Illustrator',
              img: {
                src: 'assets/images/technologies/illustrator-logo-white.svg',
                alt: 'Adobe Illustrator icon'
              }
            },
            {
              title: 'Photoshop',
              img: {
                src: 'assets/images/technologies/photoshop-logo-white.svg',
                alt: 'Adobe Photoshop icon'
              }
            },
            {
              title: 'Lighthouse',
              img: {
                src: 'assets/images/technologies/lighthouse-logo-white.svg',
                alt: 'Google Lighthouse icon'
              }
            },
            {
              title: 'Node.js',
              img: {
                src: 'assets/images/technologies/nodejs-logo-white.svg',
                alt: 'Node.js icon'
              }
            },
            {
              title: 'Firebase',
              img: {
                src: 'assets/images/technologies/firebase-logo-white.svg',
                alt: 'Firebase icon'
              }
            },
            {
              title: 'AMP',
              img: {
                src: 'assets/images/technologies/amp-logo-white.svg',
                alt: 'Google AMP icon'
              }
            },
            {
              title: 'Github',
              img: {
                src: 'assets/images/technologies/github-logo-white.svg',
                alt: 'Github icon'
              }
            },
            {
              title: 'SVG',
              img: {
                src: 'assets/images/technologies/svg-logo-white.svg',
                alt: 'SVG icon'
              }
            },
            {
              title: 'AWS',
              img: {
                src: 'assets/images/technologies/aws-logo-white.svg',
                alt: 'AWS icon'
              }
            },
            {
              title: 'Webpack',
              img: {
                src: 'assets/images/technologies/webpack-logo-white.svg',
                alt: 'Webpack icon'
              }
            },
            {
              title: 'Angular',
              img: {
                src: 'assets/images/technologies/angular-logo-white.svg',
                alt: 'Angular icon'
              }
            },
            {
              title: 'Material',
              img: {
                src: 'assets/images/technologies/angular-material-logo-white.svg',
                alt: 'Angular material icon'
              }
            },
            {
              title: 'TypeScript',
              img: {
                src: 'assets/images/technologies/typescript-logo-white.svg',
                alt: 'TypeScript icon'
              }
            },
          ]
        },
        contact: {
          title: 'What about you?',
          subtitle: 'Contact me',
          description: 'Let\'s get to know you better. Select the relevant service and leave your contact info. You’ll receive an email from me.',
          help: {
            icon: 'string',
            modal: {
              title: '',
              subtitle: 'string',
              video: 'string'
            }
          },
          form: {
            checkboxesTitle: 'What are you looking for?',
            checkboxesControlName: 'looking',
            checkboxes: [
              {
                controlName: 'looking',
                id: 'website',
                label: 'Website',
                ariaLabel: 'I am looking for a website',
                ariaDescribedBy: 'Website',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'web',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'landing-page',
                label: 'Landing Page',
                ariaLabel: 'I am looking for a Landing Page',
                ariaDescribedBy: 'Landing Page',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'landing',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'web-app',
                label: 'Web-App',
                ariaLabel: 'I am looking for a Web-App',
                ariaDescribedBy: 'Web-App',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'touch_app',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'mobile-app',
                label: 'Mobile App',
                ariaLabel: 'I am looking for a Mobile App',
                ariaDescribedBy: 'Mobile App',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'phone_android',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'ui-design',
                label: 'UI Design',
                ariaLabel: 'I am looking for an UI Design',
                ariaDescribedBy: 'UI Design',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'ui',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'ux-research',
                label: 'UX Research',
                ariaLabel: 'I am looking for an UX Research',
                ariaDescribedBy: 'UX Research',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'psychology',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'development',
                label: 'Development',
                ariaLabel: 'I am looking for a Development',
                ariaDescribedBy: 'Development',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'code',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'game',
                label: 'Game',
                ariaLabel: 'I am looking for a Game',
                ariaDescribedBy: 'Game',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'puzzle',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'logo',
                label: 'Logo',
                ariaLabel: 'I am looking for a Logo',
                ariaDescribedBy: 'Logo',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'diamond',
                required: true,
                value: false
              },
              {
                controlName: 'looking',
                id: 'other',
                label: 'Other',
                ariaLabel: 'I am looking for other thing',
                ariaDescribedBy: 'Other',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'lightbulb',
                required: true,
                value: false
              },
            ],
            inputTexts: [
              {
                controlName: 'name',
                type: 'text',
                label: 'Name',
                ariaLabel: 'Enter your name',
                ariaDescribedBy: 'Enter your name',
                placeholder: 'Jhon Dough',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft:  'user',
                required: true
              },
              {
                controlName: 'email',
                type: 'email',
                label: 'Email',
                ariaLabel: 'Enter your email',
                ariaDescribedBy: 'Enter your email',
                placeholder: 'Jhon.Dough@mail.com',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft:  'mail',
                required: true
              }
            ],
            cta: {
              text: 'Let’s Talk',
              size: 'default',
              color: 'yellow',
              ariaLabel: 'string',
              inLink: '',
              showIconRight: true,
              iconRight: 'question_answer',
              showIconLeft: false
            },
            error: {
              exitIcon: 'exit-circle',
              title: 'Oops! Something Went Wrong',
              paragraph: 'Unfortunately, your message couldn\'t be sent. Please retry or contact me directly.',
              cta: {
                href: 'mailto: gt@guytagger.com',
                text: 'Contact me',
                iconRight: 'mail'
              }
            },
            success: {
              img: {
                src: 'assets/images/projects/portfolio/deer.svg',
                alt: 'deer'
              },
              title: 'We\'ll Be in Touch Soon!',
              subtitle: 'I appreciate your interest and will get back to you shortly.'
            }
          }
        },
        footer: {
          logo: this.defaultConfigService.getLogo(),
          links: this.defaultConfigService.getRegularNavbar().links,
          socials: [
            {
              url: 'https://www.linkedin.com/in/guytagger/',
              iconName: 'linkedin'
            },
            {
              url: 'https://github.com/bsod700',
              iconName: 'github'
            },
            {
              url: 'https://www.facebook.com/gtkiller',
              iconName: 'facebook'
            },
            {
              url: '/',
              iconName: 'instagram'
            }
          ],
          email: {
            text: 'Email: Guytagger@gmail.com',
            link: 'Guytagger@gmail.com'
          },
          copyright: '<b>Copyright</b> ©2024 Guy Tagger. All rights reserved. The content on this portfolio website, including text, images, videos, and design, is protected by copyright and may not be used without the express permission of Guy Tagger. '
        }
    }
  }
}
export interface Main {
  navbar: NavbarRegular;
  header: headerConfig;
  about: AboutConfig;
  projects: CarouselConfig;
  services: CarouselConfig;
  technologies: TechnologiesConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}
