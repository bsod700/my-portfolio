import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { headerConfig } from './components';
import { AboutConfig, CarouselConfig, ContactConfig, ReviewsConfig, TechnologiesConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class MainConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
  // getLangs(): Lang[] {
  //   return [
  //     {
  //       img: 'assets/imgs/langs/he.webp',
  //       name: 'he',
  //       title: 'עברית',
  //       selected: false
  //     },
  //     {
  //       img: 'assets/imgs/langs/us.webp',
  //       name: 'en',
  //       title: 'English',
  //       selected: false
  //     }
  //   ]
  // }

    getPageConfig(): Main {
      return {
        navbar: this.defaultConfigService.getRegularNavbar(),
        header: {
          h1: 'HI IM',
          h2: 'GUY TAGGER',
          h3: 'A FRONTEND DEVELOPER & UI/UX DESIGNER & ILLUSTRATOR',
          ctaJob: {
            text: 'Let’s Create Something Great!',
            size: 'default',
            color: 'white',
            ariaLabel: 'string',
            inLink: 'contact',
            showIconRight: true,
            iconRight: 'flag',
            showIconLeft: false
          },
          ctaAbout: {
            text: 'About',
            size: 'default',
            color: 'dark',
            ariaLabel: 'string',
            inLink: 'about',
            showIconRight: true,
            iconRight: 'user',
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
            src: 'assets/images/about.png',
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
                color: 'white',
                ariaLabel: 'Go to Tierro case study',
                inLink: 'project-tierro',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false
              },
              previewImg: {
                src: 'assets/images/projects/tierro/preview.png',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'Tierro project logo'
              }
            },
            {
              title: 'BrushAlong',
              description: 'An asdasdasdr a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
              responsibilities: [
                'UX & UI Design',
                'Logo',
                'Web Development'
              ],
              cta: {
                text: 'Take Me To The Project',
                size: 'default',
                color: 'white',
                ariaLabel: 'Go to Tierro case study',
                inLink: 'project-tierro',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false
              },
              previewImg: {
                src: 'assets/images/projects/tierro/preview.png',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'Tierro project logo'
              }
            },
            {
              title: 'Portfolio',
              description: 'An asdasdasdr a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
              responsibilities: [
                'UX & UI Design',
                'Logo',
                'Web Development'
              ],
              cta: {
                text: 'Take Me To The Project',
                size: 'default',
                color: 'white',
                ariaLabel: 'Go to Tierro case study',
                inLink: 'project-tierro',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false
              },
              previewImg: {
                src: 'assets/images/projects/tierro/preview.png',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'Tierro project logo'
              }
            },
            {
              title: 'WeRLive',
              description: 'An asdasdasdr a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
              responsibilities: [
                'UX & UI Design',
                'Logo',
                'Web Development'
              ],
              cta: {
                text: 'Take Me To The Project',
                size: 'default',
                color: 'white',
                ariaLabel: 'Go to Tierro case study',
                inLink: 'project-tierro',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false
              },
              previewImg: {
                src: 'assets/images/projects/tierro/preview.png',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'Tierro project logo'
              }
            },
            {
              title: 'CyberGhost',
              description: 'An asdasdasdr a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
              responsibilities: [
                'UX & UI Design',
                'Logo',
                'Web Development'
              ],
              cta: {
                text: 'Take Me To The Project',
                size: 'default',
                color: 'white',
                ariaLabel: 'Go to Tierro case study',
                inLink: 'project-tierro',
                showIconRight: true,
                iconRight: 'east',
                showIconLeft: false
              },
              previewImg: {
                src: 'assets/images/projects/tierro/preview.png',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'Tierro project logo'
              }
            },
            {
              title: 'TCAbility',
              description: 'An asdasdasdr a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
              responsibilities: [
                'UX & UI Design',
                'Logo',
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
                src: 'assets/images/projects/tierro/preview.png',
                alt: 'Tierro project - preview image'
              },
              iconImg: {
                src: 'assets/images/projects/tierro/logo-color.svg',
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
                src: 'assets/images/services/uiux.png',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Graphic Design',
              title: 'Graphics',
              description: 'Designing visually stunning logos, slides, and branding materials. Using tools like Illustrator and Photoshop, I create cohesive and impactful visual identities for brands.',
              previewImg: {
                src: 'assets/images/services/uiux.png',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Illustrations',
              title: 'Illustrations',
              description: ' If you need custom artwork, icons, or infographics, I’ve got you covered. I create unique illustrations that add personality and visual appeal to your brand, making your content more engaging and memorable.',
              previewImg: {
                src: 'assets/images/services/uiux.png',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Interactive Design & Development',
              title: 'Interactive',
              description: 'Want to make your website or app fun and engaging? I’m here to help. I create dynamic designs with animations and interactive elements that will captivate your users and provide a memorable experience.',
              previewImg: {
                src: 'assets/images/services/uiux.png',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Design Consulting',
              title: 'Consulting',
              description: 'Offering expert advice on design strategy, usability, and aesthetics. I help businesses and individuals refine their digital products to meet user needs and achieve their goals.',
              previewImg: {
                src: 'assets/images/services/uiux.png',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Front-End Development',
              title: 'Front-End',
              description: 'Building responsive, mobile-friendly websites using Angular, HTML, SCSS, JavaScript, and TypeScript. I follow best practices to deliver clean, efficient, and maintainable code for high-performance web applications.',
              previewImg: {
                src: 'assets/images/services/uiux.png',
                alt: 'a hand holding a smartphone with uiux design'
              }
            },
            {
              longTitle: 'Back-End Development',
              title: 'Back-End',
              description: 'Developing robust and scalable server-side applications using Node.js. I ensure seamless integration with front-end systems, utilizing APIs for efficient data exchange, and maintain best practices in security and performance.',
              previewImg: {
                src: 'assets/images/services/uiux.png',
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
                src: 'assets/images/technologies/bootstrap-logo-color.svg',
                alt: 'Bootstrap icon'
              }
            },
            {
              title: 'SCSS',
              img: {
                src: 'assets/images/technologies/scss-logo-color.svg',
                alt: 'SCSS icon'
              }
            },
            {
              title: 'CSS3',
              img: {
                src: 'assets/images/technologies/css3-logo-color.svg',
                alt: 'CSS3 icon'
              }
            },
            {
              title: 'HTML5',
              img: {
                src: 'assets/images/technologies/html5-logo-color.svg',
                alt: 'HTML5 icon'
              }
            },
            {
              title: 'Figma',
              img: {
                src: 'assets/images/technologies/figma-logo-color.svg',
                alt: 'Figma icon'
              }
            },
            {
              title: 'Illustrator',
              img: {
                src: 'assets/images/technologies/illustrator-logo-color.svg',
                alt: 'Adobe Illustrator icon'
              }
            },
            {
              title: 'Photoshop',
              img: {
                src: 'assets/images/technologies/photoshop-logo-color.svg',
                alt: 'Adobe Photoshop icon'
              }
            },
            {
              title: 'Lighthouse',
              img: {
                src: 'assets/images/technologies/lighthouse-logo-color.svg',
                alt: 'Google Lighthouse icon'
              }
            },
            {
              title: 'Node.js',
              img: {
                src: 'assets/images/technologies/nodejs-logo-color.svg',
                alt: 'Node.js icon'
              }
            },
            {
              title: 'Firebase',
              img: {
                src: 'assets/images/technologies/firebase-logo-color.svg',
                alt: 'Firebase icon'
              }
            },
            {
              title: 'AMP',
              img: {
                src: 'assets/images/technologies/amp-logo-color.svg',
                alt: 'Google AMP icon'
              }
            },
            {
              title: 'Github',
              img: {
                src: 'assets/images/technologies/github-logo-color.svg',
                alt: 'Github icon'
              }
            },
            {
              title: 'Next.js',
              img: {
                src: 'assets/images/technologies/nextjs-logo-color.svg',
                alt: 'Next.js icon'
              }
            },
            {
              title: 'APIs',
              img: {
                src: 'assets/images/technologies/api-logo-color.svg',
                alt: 'RAPIs icon'
              }
            },
            {
              title: 'SMIL',
              img: {
                src: 'assets/images/technologies/svg-logo-color.svg',
                alt: 'SVG icon'
              }
            },
            {
              title: 'SVG',
              img: {
                src: 'assets/images/technologies/svg-logo-color.svg',
                alt: 'SVG icon'
              }
            },
            {
              title: 'AWS',
              img: {
                src: 'assets/images/technologies/aws-logo-color.svg',
                alt: 'AWS icon'
              }
            },
            {
              title: 'Webpack',
              img: {
                src: 'assets/images/technologies/webpack-logo-color.svg',
                alt: 'Webpack icon'
              }
            },
            {
              title: 'Angular',
              img: {
                src: 'assets/images/technologies/angular-logo-color.svg',
                alt: 'Angular icon'
              }
            },
            {
              title: 'Material',
              img: {
                src: 'assets/images/technologies/angular-material-logo-color.svg',
                alt: 'Angular material icon'
              }
            },
            {
              title: 'Augury',
              img: {
                src: 'assets/images/technologies/angular-augury-logo-color.svg',
                alt: 'Angular Augury icon'
              }
            },
            {
              title: 'TypeScript',
              img: {
                src: 'assets/images/technologies/typeScript-logo-color.svg',
                alt: 'TypeScript icon'
              }
            },
          ]
        },
        reviews: {
          title: 'What My Clients Say',
          subtitle: 'Reviews',
          paragraph: 'Check out what my clients have to say about our time working together.',
          reviews: [
            {
              img: {
                src: 'assets/images/reviews/tierro.png',
                alt: 'Tierro photo'
              },
              name: 'Dor Tierro',
              review: 'Welcome to my Front-End Development and UI/UX Design portfolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer ',
              active: true
            },
            {
              img: {
                src: 'assets/images/reviews/tierro.png',
                alt: 'Tierro photo'
              },
              name: 'Dor Tierro',
              review: 'Welcome to my Front-End Development and UI/UX Design portfolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer ',
              active: false
            },
            {
              img: {
                src: 'assets/images/reviews/tierro.png',
                alt: 'Tierro photo'
              },
              name: 'Dor Tierro',
              review: 'Welcome to my Front-End Development and UI/UX Design portfolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer ',
              active: false
            }
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
            checkboxes: [
              {
                controlName: 'looking',
                label: 'Website',
                ariaLabel: 'I am looking for a website',
                ariaDescribedBy: 'Website',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: 'info',
                required: true,
                
              },
              {
                controlName: 'looking',
                label: 'Landing Page',
                ariaLabel: 'I am looking for a Landing Page',
                ariaDescribedBy: 'Landing Page',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'Web-App',
                ariaLabel: 'I am looking for a Web-App',
                ariaDescribedBy: 'Web-App',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'Mobile App',
                ariaLabel: 'I am looking for a Mobile App',
                ariaDescribedBy: 'Mobile App',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'UI Design',
                ariaLabel: 'I am looking for an UI Design',
                ariaDescribedBy: 'UI Design',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'UX Research',
                ariaLabel: 'I am looking for an UX Research',
                ariaDescribedBy: 'UX Research',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'Development',
                ariaLabel: 'I am looking for a Development',
                ariaDescribedBy: 'Development',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'Game',
                ariaLabel: 'I am looking for a Game',
                ariaDescribedBy: 'Game',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'Logo',
                ariaLabel: 'I am looking for a Logo',
                ariaDescribedBy: 'Logo',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
              {
                controlName: 'looking',
                label: 'Other',
                ariaLabel: 'I am looking for other thing',
                ariaDescribedBy: 'Other',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: '',
                required: true
              },
            ],
            inputTexts: [
              {
                controlName: 'name',
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
              color: 'gold',
              ariaLabel: 'string',
              inLink: '',
              showIconRight: true,
              iconRight: 'user',
              showIconLeft: false
            }
          }
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
  reviews: ReviewsConfig;
  contact: ContactConfig;
}
