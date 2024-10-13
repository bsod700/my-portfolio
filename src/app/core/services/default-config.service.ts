import { Injectable } from '@angular/core';
import { Img } from '@core/models/img';
import { NavbarRegular } from '..';
import { CardWorkConfig, FooterConfig, logoConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class DefaultConfigService {
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
  // getNavbarConfig(): NavbarRegular {
  //   return {
  //     logoImg: this.getLogo(),
  //     cta: {
  //       text: 'Contact Us',
  //       size: '',
  //       color: 'primary',
  //       ariaLabel: 'Go to contact page',
  //       inLink: 'contact'
  //     },
  //     langs: this.getLangs()
  //   }
  // }

  getLogo(): logoConfig {
    return {
      type: 'symbol',
      img: {
        src: 'assets/imgs/logo-symbol.svg',
        alt: 'Guy Tagger',
      }
    }
  }

  getRegularNavbar(): NavbarRegular {
   return {
    logo: this.getLogo(),
    links: [
      {
        label: 'Home',
        ariaLabel: 'Go to Home',
        showIcon: false,
        inLink: 'header',
        scrollToLink: true,
        page: 'home'
      },
      {
        label: 'About',
        ariaLabel: 'Go to about section',
        showIcon: false,
        inLink: 'about',
        scrollToLink: true,
        page: 'home'
      },
      {
        label: 'Projects',
        ariaLabel: 'Go to projects section',
        showIcon: false,
        inLink: 'projects',
        scrollToLink: true,
        page: 'home'
      }
    ],
    cta: {
      text: 'Contact Me',
      size: 'regular',
      color: 'yellow',
      ariaLabel: 'Go to contact form section',
      scrollTo: 'contact',
      showIconLeft: false,
      showIconRight: false
    }
   }
  }

  getRegularFooter(): FooterConfig {
    return {
      logo: {
        type: 'vertical',
        img: {
          src: 'assets/imgs/logo-vertical.svg',
          alt: 'Guy Tagger',
        }
      },
      links: this.getRegularNavbar().links,
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

  getWorks(): Works {
    return {
      designs: {
        websitesLps: [
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
        ],
        saas: [
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
        ],
        branding: [
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
          }
        ],
        emailsBanners: [
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
          }
        ],
        illustrations: [
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
          }
        ]
      },
      development: {
        websitesLps: [
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
      }
    }
  }

  getWorksByCategory(category: 'designs' | 'development', type: string): CardWorkConfig[] {
    if (!type) {
      return [];
    }
  
    const works = this.getWorks();
  
    return works?.[category]?.[type] ?? [];
  }
}

interface Works {
  designs: typesWorks;
  development: typesWorks;
}

interface typesWorks {
  [key: string]: CardWorkConfig[];
}
