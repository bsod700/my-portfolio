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
            iconRight: 'user'
          },
          ctaAbout: {
            text: 'About',
            size: 'default',
            color: 'dark',
            ariaLabel: 'string',
            inLink: 'about',
            showIconRight: true,
            iconRight: 'job'
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
            src: 'string',
            alt: 'string'
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
                showIconRight: false
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
                showIconRight: false
              }
            }
          ]
        },
        services: {
          title: 'string',
          subtitle: 'string',
          subjects: [
            {
              title: 'string',
              description: 'string',
              img: {
                src: 'string',
                alt: 'string'
              }
            }
          ]
        },
        technologies: {
          title: 'string',
          subtitle: 'string',
          technologies: [
            {
              title: 'string',
              img: {
                src: 'string',
                alt: 'string'
              }
            }
          ]
        },
        reviews: {
          title: 'string',
          subtitle: 'string',
          paragraph: 'string',
          reviews: [
            {
              img: {
                src: 'string',
                alt: 'string'
              },
              name: 'string',
              review: 'string',
              active: false
            }
          ]
        },
        contact: {
          title: 'string',
          subtitle: 'string',
          description: 'string',
          help: {
            icon: 'string',
            modal: {
              title: '',
              subtitle: 'string',
              video: 'string'
            }
          },
          form: {
            checkboxes: [
              {
                controlName: 'agree1',
                label: 'I agree to the terms and conditions 1',
                ariaLabel: 'Agree to terms 1',
                ariaDescribedBy: 'terms-description-1',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft: {icon: ''},
                required: true
              }
            ],
            inputTexts: [
              {
                controlName: 'username',
                label: 'Username',
                ariaLabel: 'Enter your username',
                ariaDescribedBy: 'username-description',
                hasIconLeft: true,
                hasIconRight: false,
                iconLeft:  {icon: ''},
                required: true
              }
            ],
            cta: {
              text: 'Let’s Create Something Great!',
              size: 'default',
              color: 'white',
              ariaLabel: 'string',
              inLink: 'contact',
              showIconRight: true,
              iconRight: 'user'
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
