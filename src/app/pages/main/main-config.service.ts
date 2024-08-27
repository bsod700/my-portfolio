import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { headerConfig } from './components';
import { AboutConfig, CarouselConfig, ContactConfig, ExploreWorkConfig, FooterConfig, ReviewsCarouselConfig, ReviewsConfig, TechnologiesConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class MainConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);

    getPageConfig(): Main {
      return {
        navbar: this.defaultConfigService.getRegularNavbar(),
        header: {
          h1: 'Guy Tagger Design & Code Wizard',
          paragraph: 'Dive into a portfolio where creativity meets technology.',
          ctaJob: {
            text: 'Tell me about your project',
            size: 'default',
            color: 'yellow',
            ariaLabel: 'Go to projects section',
            scrollTo: 'contact',
            showIconRight: true,
            iconRight: 'flag',
            showIconLeft: false
          }
        },
        about: {
          title: 'Who am i?',
          subtitle: 'Intro',
          paragraphs: [
            'Ahoy! My name is Guy, a professional designer and developer. I create engaging digital experiences with clean, rapid code for every industry.',
            'My technical toolkit includes:'
          ],
          bullets: {
            iconColorBG: 'white',
            bullets: [
              {
                iconName: 'palette',
                title: 'Design',
                text: 'My expertise in Figma, Adobe XD, Illustrator, and Photoshop equips me with the ability to craft detailed wireframes, user-friendly interfaces, and compelling visual content. My designs not only look great but are also responsive and accessible across every device size, ensuring seamless user interaction.'
              },
              {
                iconName: 'code',
                title: 'Development',
                text: 'Proficient in HTML, SCSS, JavaScript, and TypeScript, I develop responsive and efficient websites and applications using Angular. My focus on clean code ensures optimal performance and accessibility across all platforms.'
              },
              {
                iconName: 'integration',
                title: 'Integration',
                text: ' Ensuring cohesive digital experiences that are SEO-optimized and high-performing. This integrated approach efficiently transforms creative concepts into functional realities.'
              }
            ]
          },
          img: {
            src: 'assets/images/about.webp',
            alt: 'Guy Tagger profile photo'
          }

        },
        exploreWork: {
          title: 'Let\'s turn your ideas into reality.',
          subtitle: 'Explore my work',
          types: [
            {
              title: 'Designs',
              subtitle: 'As a versatile designer, I create engaging websites, dynamic graphics, animations, apps, and games tailored to various industries. Explore my designs in different fields.',
              cardRows: [
                {
                  title: 'Websites / Landing Page',
                  moreLink: 'projects/design/websites-lps',
                  cards: [
                    {
                      type: 'Website',
                      typeIcon: 'ui',
                      logo: {
                        src: 'assets/images/projects/tierro/logo-color.svg',
                        alt: 'Tierro project logo'
                      },
                      projectName: 'Tierro',
                      bullets: [
                        'UX & UI Design',
                        'Responsive',
                        'Web Development'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/tierro/desktop-client.webp',
                        alt: 'Tierro client website on laptop screen'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to Tierro website design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Website',
                      typeIcon: 'ui',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Portfolio project logo'
                      },
                      projectName: 'Portfolio',
                      bullets: [
                        'UX & UI Design',
                        'Illustration',
                        'Web Development'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/portfolio/hero.webp',
                        alt: 'portfolio project screens on mobile,tablet and desktop'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to Portfolio website design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Website',
                      typeIcon: 'ui',
                      logo: {
                        src: 'assets/images/projects/tcability/logo-symbol-color.svg',
                        alt: 'TCAbility project logo'
                      },
                      projectName: 'TCAbility',
                      bullets: [
                        'UX & UI Design',
                        'Illustration',
                        'Web Development'
                      ],
                      comingSoon: true,
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                        text: 'Coming Soon',
                        size: 'default',
                        color: 'disable-white',
                        ariaLabel: 'TCAbility web design is Coming soon',
                        showIconRight: true,
                        iconRight: 'pending',
                        showIconLeft: false
                      }
                    }
                  ]
                },
                {
                  title: 'Web-App / Saas / CRM',
                  moreLink: 'projects/design/saas',
                  cards: [
                    {
                      type: 'Management',
                      typeIcon: 'management',
                      logo: {
                         src: 'assets/images/projects/tierro/logo-color.svg',
                        alt: 'Tierro project logo'
                      },
                      projectName: 'Tierro',
                      bullets: [
                        'CRM',
                        'Admin',
                        'Design System'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/tierro/crm-preview.webp',
                        alt: 'CRM Admin'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'string',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Management',
                      typeIcon: 'management',
                      logo: {
                        src: 'assets/images/projects/tcability/logo-symbol-color.svg',
                        alt: 'TCAbility project logo'
                      },
                      projectName: 'TCAbility',
                      bullets: [
                        'Saas',
                        'Accessibility',
                        'Design System'
                      ],
                      comingSoon: true,
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                        text: 'Coming Soon',
                        size: 'default',
                        color: 'disable-white',
                        ariaLabel: 'Coming soon',
                        showIconRight: true,
                        iconRight: 'pending',
                        showIconLeft: false
                      }
                    }
                  ]
                },
                {
                  title: 'Logo / Branding',
                  moreLink: 'projects/design/logo & branding',
                  cards: [
                    {
                      type: 'Logo',
                      typeIcon: 'diamond',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Guy Tagger project logo'
                      },
                      projectName: 'Portfolio',
                      bullets: [
                        'Portfolio',
                        'Creation',
                        'Journey'
                      ],
                      projectImage: {
                        src: 'assets/images/logo-vertical.svg',
                        alt: 'Guy Tagger project logo'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to portfolio logo design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Logo',
                      typeIcon: 'diamond',
                      logo: {
                        src: 'assets/images/projects/tierro/logo-color.svg',
                        alt: 'Tierro project logo'
                      },
                      projectName: 'Tierro',
                      bullets: [
                        'Music',
                        'Producer',
                        'Portfolio'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/tierro/logo-color.svg',
                        alt: 'Tierro project logo'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to Tierro logo design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    }, 
                    {
                      type: 'Logo',
                      typeIcon: 'diamond',
                      logo: {
                        src: 'assets/images/projects/werlive/logo-symbol-color.svg',
                        alt: 'WeRlive logo'
                      },
                      projectName: 'WeRlive',
                      bullets: [
                        'Streaming',
                        'Corporation',
                        'Consulting'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/werlive/logo-color.svg',
                        alt: 'WeRlive logo'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to werlive logo design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                  ]
                },
                {
                  title: 'Emails / Newsletter / banners',
                  moreLink: 'projects/design/emails & banners',
                  cards: [
                    {
                      type: 'Email',
                      typeIcon: 'mail',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Guy Tagger project logo'
                      },
                      projectName: 'Portfolio',
                      bullets: [
                        'Portfolio',
                        'Creation',
                        'Journey'
                      ],
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to portfolio logo design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Email',
                      typeIcon: 'mail',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Guy Tagger project logo'
                      },
                      projectName: 'Portfolio',
                      bullets: [
                        'Portfolio',
                        'Creation',
                        'Journey'
                      ],
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to portfolio logo design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Email',
                      typeIcon: 'mail',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Guy Tagger project logo'
                      },
                      projectName: 'Portfolio',
                      bullets: [
                        'Portfolio',
                        'Creation',
                        'Journey'
                      ],
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to portfolio logo design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                  ]
                },
                {
                  title: 'Illustrations Animations / Game',
                  moreLink: 'projects/design/illustrations & game-design',
                  cards: [
                    {
                      type: 'Game',
                      typeIcon: 'phone_android',
                      logo: {
                        src: 'assets/images/projects/brush-along/symbol.webp',
                        alt: 'Brush Along project game design'
                      },
                      projectName: 'BrushAlong',
                      bullets: [
                        'UX & UI Design',
                        'Illustration',
                        'Prototype'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/brush-along/preview-devices.webp',
                        alt: 'brush along preview game design'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to BrushAlong game design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Illustrations',
                      typeIcon: 'brush',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Guy Tagger project logo'
                      },
                      projectName: 'Mr. Avocado',
                      bullets: [
                        'Cute',
                        'Green',
                        'Happy'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/illustrations/export-minify.svg',
                        alt: 'mr. avocado illustration animation preview'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to mr. Avocado illustrate design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Illustrations',
                      typeIcon: 'brush',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Guy Tagger project logo'
                      },
                      projectName: 'Murskweesh',
                      bullets: [
                        'Cute',
                        'Green',
                        'Happy'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/illustrations/murdskweesh.webp',
                        alt: 'murdskweesh illustration animation preview'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to murdskweesh illustrate design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                  ]
                },
              ]
            },
            {
              title: 'Development',
              subtitle: 'As a versatile developer, I create fast-loading, clean, and organized code for websites, animations, and email systems, all designed with accessibility in mind. Explore my work in different fields.',
              cardRows: [
                {
                  title: 'Websites / Landing Page',
                  moreLink: 'projects/development/websites-lps',
                  cards: [
                    {
                      type: 'Website',
                      typeIcon: 'ui',
                      logo: {
                        src: 'assets/images/projects/tierro/logo-color.svg',
                        alt: 'Tierro project logo'
                      },
                      projectName: 'Tierro',
                      bullets: [
                        'UX & UI Design',
                        'Responsive',
                        'Web Development'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/tierro/desktop-client.webp',
                        alt: 'Tierro client website on laptop screen'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to Tierro website design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Website',
                      typeIcon: 'ui',
                      logo: {
                        src: 'assets/images/logo-symbol.svg',
                        alt: 'Portfolio project logo'
                      },
                      projectName: 'Portfolio',
                      bullets: [
                        'UX & UI Design',
                        'Illustration',
                        'Web Development'
                      ],
                      projectImage: {
                        src: 'assets/images/projects/portfolio/hero.webp',
                        alt: 'portfolio project screens on mobile,tablet and desktop'
                      },
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                          text: 'Take Me To The Project',
                          size: 'default',
                          color: 'yellow',
                          ariaLabel: 'Redirect to Portfolio website design',
                          showIconRight: true,
                          iconRight: 'arrow_right',
                          showIconLeft: false
                      }
                    },
                    {
                      type: 'Website',
                      typeIcon: 'ui',
                      logo: {
                        src: 'assets/images/projects/tcability/logo-symbol-color.svg',
                        alt: 'TCAbility project logo'
                      },
                      projectName: 'TCAbility',
                      bullets: [
                        'UX & UI Design',
                        'Illustration',
                        'Web Development'
                      ],
                      comingSoon: true,
                      projectDescription: 'An innovative webpage and logo design for a music producer, showcasing musical creativity. This project also includes a streamlined and efficient admin page designed for easy management and control.',
                      cta: {
                        text: 'Coming Soon',
                        size: 'default',
                        color: 'disable-white',
                        ariaLabel: 'TCAbility web design is Coming soon',
                        showIconRight: true,
                        iconRight: 'pending',
                        showIconLeft: false
                      }
                    }
                  ]
                },
              ]
            }
          ]
        },
        reviewsCarousel: {
          title: 'What My Clients Say',
          subtitle: 'Reviews',
          paragraphs: [
            'Check out what my clients have to say about our time working together.'
          ],
          cards: [
            {
              img: {
                src: 'assets/images/projects/tierro/tierro.webp',
                alt: 'tierro profile'
              },
              title: 'Tierro',
              logo: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'tierro logo'
              },
              review: 'sadasdd to my Front-End Development and UI/UX Design portfolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer '
            },
            {
              img: {
                src: 'assets/images/projects/tierro/tierro.webp',
                alt: 'tierro profile'
              },
              title: 'Tierro',
              logo: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'tierro logo'
              },
              review: 'Welcome to my Front-End Development and UI/UX Design portfolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer '
            },
            {
              img: {
                src: 'assets/images/projects/tierro/tierro.webp',
                alt: 'tierro profile'
              },
              title: 'Tierro',
              logo: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'tierro logo'
              },
              review: 'W UI/UX Design portfolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer '
            },
            {
              img: {
                src: 'assets/images/projects/tierro/tierro.webp',
                alt: 'tierro profile'
              },
              title: 'Tierro',
              logo: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'tierro logo'
              },
              review: 'Welcome to my dasdsadFront-End Developmenolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer '
            },
            {
              img: {
                src: 'assets/images/projects/tierro/tierro.webp',
                alt: 'tierro profile'
              },
              title: 'Tierro',
              logo: {
                src: 'assets/images/projects/tierro/logo-color.svg',
                alt: 'tierro logo'
              },
              review: 'Welcome to my Front-vfvfvfv Development and UI/UX Design portfolio! My name is Guy Tagger and I am a highly skilled and experienced Front-End Developer with a specialization in Angular and UI/UX Designer '
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
          logo: {
            type: 'vertical',
            img: {
              src: 'assets/imgs/logo-vertical.svg',
              alt: 'Guy Tagger',
            }
          },
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
  exploreWork: ExploreWorkConfig;
  reviewsCarousel: ReviewsCarouselConfig;
  technologies: TechnologiesConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}
