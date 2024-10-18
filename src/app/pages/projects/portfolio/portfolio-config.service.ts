import { inject, Injectable } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { FigmaProjectConfig, HeaderProjectConfig, ProjectDesignSystemConfig, ProjectDynamicSectionConfig, ProjectFinalSectionConfig, ProjectMonoDynamicSectionConfig, ProjectProblemSolutionConfig, ProjectProcessConfig, ProjectSectionBulletsConfig, ProjectStyleGuideConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class PortfolioConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
  
  getPageConfig(): PortfolioProjectConfig {
    return {
      navbar: this.defaultConfigService.getRegularNavbar(),
      header: {
        projectName: 'portfolio',
        logo: {
          src: 'assets/images/projects/portfolio/logo.svg',
          alt: 'Portfolio project logo'
        },
        title: 'Showcasing My Portfolio',
        subtitle: 'Design and Development of a Personal Website to Highlight My Skills and Attract Clients',
        bullets: [
          {
            title: 'Industry',
            subtitle: 'Design'
          },
          {
            title: 'Platform',
            subtitle: 'Web'
          },
          {
            title: 'Role',
            subtitle: 'UI &UX Designer & Developer'
          }
        ],
        img: {
          src: 'assets/images/projects/portfolio/header.webp',
          alt: 'portfolio project screens on mobile,tablet and desktop'
        },
        cta: {
          text: 'Take Me To The Live Site',
          size: 'default',
          color: 'yellow',
          ariaLabel: 'Go to Guy Tagger portfolio website',
          showIconRight: true,
          iconRight: 'arrow_right_line',
          showIconLeft: false,
          inLink: '/'
        },
        devCta: {
          text: 'Go To The Repository',
          size: 'default',
          color: 'yellow',
          ariaLabel: 'Go to portfolio github repository',
          outLink: 'https://github.com/bsod700/my-portfolio',
          showIconRight: true,
          iconRight: 'github',
          showIconLeft: false
        },
      },
      overview: {
        projectName: 'portfolio',
        sections: [
          {
            dir: 'rtl',
            title: 'Project Overview',
            subtitle: 'Background',
            paragraphs: [
              'In the highly competitive field of design, creating a strong and impactful online presence is essential for professionals to showcase their work, attract clients, and build their personal brand. As a designer and developer, I recognized the need for a professional, visually appealing, and user-friendly portfolio website to effectively highlight my skills, projects, and services. This project aimed to design and develop a personal portfolio website that not only showcases my expertise in UI/UX design and development but also reflects my creative vision and unique style. Through this portfolio, I aimed to create an engaging platform where potential clients can explore my work, learn about my services, and easily connect with me for future collaborations.'
            ],
            img: {
              src: 'assets/images/projects/portfolio/desktop-client.webp',
              alt: 'portfolio website on laptop screen'
            }
          },
          {
            dir: 'ltr',
            subtitle: 'Role & Responsibilities',
            paragraphs: [
              'As the designer and developer for this project, I undertook the following tasks:'
            ],
            bullets: [
              {
                title: 'Webpage Design:',
                text: 'Created a visually appealing and user-friendly webpage layout, illustrating key sections with a specialized focus on implementing a parallax effect in the hero section for enhanced visual engagement.'
              },
              {
                title: 'Responsive Design:',
                text: 'Ensured the website is fully responsive and looks great on all devices, including desktops, tablets, and smartphones.'
              },
              {
                title: 'User Experience (UX) Design:',
                text: 'Designed an intuitive and engaging user experience that encourages visitors to explore my portfolio and learn about my services.'
              },
              {
                title: 'Web Development:',
                text: 'Coded and implemented the design, incorporating the parallax effect in the hero section to add depth and interactivity, ensuring smooth functionality and performance of the website.'
              },
              {
                title: 'Testing & Debugging:',
                text: 'Conducted thorough testing to identify and fix any issues, ensuring a seamless user experience across all platforms.'
              }
            ]
          }
        ]
      },
      process: {
        projectName: 'portfolio',
        title: 'The Process',
        subtitle: 'Design Process',
        paragraphs: [
          'The design process for this project began with comprehensive research to understand the latest trends in web design and the specific needs of a professional portfolio. This foundational step ensured that the resulting website would be both visually appealing and highly functional.',
          'With a solid understanding of the project requirements, I moved on to creating engaging visuals and a cohesive design, incorporating a variety of illustrative elements. A key feature was the hero section, which utilized a parallax effect to create depth and visual interest. This design choice aimed to capture attention and provide an interactive experience for visitors.',
          'The project then moved into the development phase, where I coded the website and implemented the parallax effect in the hero section. Ensuring the site was fully responsive was a priority, making it accessible and visually consistent across all devices.',
          'An extensive testing phase followed, where every aspect of the site was rigorously tested to identify and resolve any issues, ensuring a smooth and error-free user experience. This included testing for functionality, performance, and cross-platform compatibility.',
          'Finally, the optimized product was deployed, marking the successful launch of a professional and engaging online presence. This comprehensive design process not only met but exceeded my objectives, delivering a portfolio that effectively showcases my skills, creativity, and expertise in design and development.'
        ],
        process: [
          {
            title: 'Research',
            text: 'Conducted research to identify key trends and features for an impactful portfolio.',
          },
          {
            title: 'Design',
            text: 'Created cohesive visuals and an intuitive layout to enhance user engagement.',
          },
          {
            title: 'Illustrate',
            text: 'Designed engaging visuals, focusing on the hero section with a parallax effect.',
          },
          {
            title: 'Development',
            text: 'Coded the website, implementing the parallax hero section and ensuring full responsiveness.',
          },
          {
            title: 'Testing',
            text: 'Conducted rigorous testing to ensure smooth functionality and a seamless user experience.',
          },
          {
            title: 'Launch',
            text: 'Successfully deployed the optimized website, establishing a professional and engaging online presence.',
          }
        ]
      },
      problemSolution: {
        projectName: 'portfolio',
        problem: {
          title: 'Problem',
          paragraph: [
            'I needed a professional and visually appealing online presence to showcase my work, attract clients, and build a strong personal brand. Generic platforms didn\'t reflect my unique design vision or provide the interactive experience I wanted for visitors. To truly showcase my skills and creativity, every detail had to represent my vision.'
          ]
        },
        solution: {
          title: 'Solution',
          paragraph: [
            'I designed and developed a custom portfolio website to visually represent my brand and design vision. This involved creating an engaging visual style, including a parallax hero section to capture attention. The site is fully responsive and user-friendly, ensuring a smooth experience across all devices. Thorough testing guaranteed a flawless user experience, resulting in a professional and dynamic online presence tailored to my needs.'
          ]
        }
      },
      clientPage: {
        projectName: 'portfolio',
        subtitle: 'Personal Portfolio',
        paragraphs: [
          'The Personal Portfolio Website is a visually appealing and user-friendly platform designed to showcase my design and development work.'
        ],
        bullets: [
          {
            iconName: 'settings',
            title: 'Showcase Music',
            text: 'Highlights my projects and skills, providing detailed case studies and examples of my work.'
          },
          {
            iconName: 'palette',
            title: 'Engaging Visuals',
            text: 'Utilizes engaging visuals and a cohesive design to reflect my creative vision and style.'
          },
          {
            iconName: 'responsive',
            title: 'Responsive Design',
            text: 'Ensures the website is fully responsive, offering a seamless experience across all devices.'
          },
          {
            iconName: 'interactive',
            title: 'Interactive Experience',
            text: 'Incorporates interactive elements like a parallax hero section to captivate visitors and enhance user engagement.'
          }
        ],
        image: {
          src: 'assets/images/projects/portfolio/desktop-client2.webp',
          alt: 'portfolio website page on laptop screen'
        },
        dir: 'ltr'
      },
      theGoal: {
        projectName: 'portfolio',
        style: 'columns-2-center text-center',
        title: 'Vision',
        subtitle: 'The Goal',
        paragraphs: [
          'The objective was to establish a professional and engaging online presence to showcase my design and development skills. This involved designing a visually appealing portfolio website where potential clients can explore my work and learn about my services. The project aimed to reflect my unique creative vision, highlight my expertise, and provide a dynamic platform to adapt to future needs.'
        ],
        bullets: [
          {
            iconName: 'thumb_up_circle',
            title: 'Professional Presence',
            text: 'Establish a professional and engaging online presence to attract clients.'
          },
          {
            iconName: 'palette',
            title: 'Portfolio Showcase',
            text: 'Design a visually appealing website for potential clients to explore my projects and skills.'
          },
          {
            iconName: 'responsive',
            title: 'Responsive Design',
            text: 'Ensure the website is fully responsive and user-friendly across all devices.'
          },
          {
            iconName: 'lightbulb',
            title: 'Creative Vision',
            text: 'Reflect my unique creative vision and design style.'
          },
          {
            iconName: 'interactive',
            title: 'Interactive Elements',
            text: 'Incorporate interactive elements like a parallax hero section to enhance user engagement.'
          },
          {
            iconName: 'tune',
            title: 'Dynamic Platform',
            text: 'Provide a dynamic platform that can adapt to my evolving needs and showcase new work.'
          }
        ]
      },
      figmaConfig: {
        projectName: 'portfolio',
        subtitle: 'Project Figma link',
        figma: {
          width: '100%',
          height: '450',
          link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIjRCEvp9uA6nEIIInIb7hN%2FPortfolio-Project%3Fnode-id%3D0-1%26t%3DL3CrXtF96uH8NLoS-1&show-layers=1'
        }
      },
      figmaCompsConfig: {
        projectName: 'portfolio',
        subtitle: 'Project\'s Components',
        figma: {
          width: '100%',
          height: '450',
          link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIjRCEvp9uA6nEIIInIb7hN%2FPortfolio-Project%3Fnode-id%3D1-5692%26t%3DL3CrXtF96uH8NLoS-1'
        }
      },
      figmaProjectsConfig: {
        projectName: 'portfolio',
        subtitle: 'Project\'s Case Studies',
        figma: {
          width: '100%',
          height: '450',
          link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIjRCEvp9uA6nEIIInIb7hN%2FPortfolio-Project%3Fnode-id%3D1-10932%26t%3DL3CrXtF96uH8NLoS-1'
        }
      },
      styleGuide: {
        projectName: 'portfolio',
        specialClass: 'white-bg text-center',
        title: 'Visual Solution',
        subtitle: 'Style Guide',
        abc: 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz',
        items: [
          {
            text: {
              paragraphs: [
                'The style guide for my personal portfolio website defines the visual and interactive elements, ensuring a cohesive and engaging user experience. It includes color schemes, typography, iconography, and design principles that reflect a professional, creative, and user-friendly aesthetic.'
              ],
              bullets: [
                {
                  iconName: 'palette',
                  title: 'Color Scheme',
                  text: 'A modern and sophisticated palette that enhances readability and visual appeal.'
                },
                {
                  iconName: 'a_char',
                  title: 'Typography',
                  text: 'Clean and readable fonts that maintain a professional and approachable tone.'
                },
                {
                  iconName: 'diamond',
                  title: 'Iconography',
                  text: 'Simple and intuitive icons that aid navigation and user interaction.'
                },
                {
                  iconName: 'thumb_up',
                  title: 'Design Principles',
                  text: 'Focus on minimalism, responsiveness, and interactivity to create a seamless user experience across all devices.'
                },
              ]
            }
          },
          {
            font: {
              title: 'Montagu Slab',
              img: {
                src: 'assets/images/projects/portfolio/abc.svg',
                alt: ''
              },
              styles: [
                'Regular'
              ]
            }
          },
          {
            colors: [
              {
                classes: 'big',
                hex: '#FDC45D'
              },
              {
                hex: '#190417'
              },
              {
                hex: '#30325C'
              },
              {
                hex: '#402B48'
              },
              {
                hex: '#CC6850'
              },
              {
                hex: '#F5F5F5'
              },
              {
                hex: '#34233B'
              }
            ]
          }
        ]
      },
      designSystem: {
        projectName: 'portfolio',
        specialClass: 'text-center ',
        subtitle: 'Design System',
        cards: [
          {
            src: 'assets/images/projects/portfolio/components/typography-design-system.webp',
            alt: 'Typography'
          },
          {
            src: 'assets/images/projects/portfolio/components/color-palette-design-system.webp',
            alt: 'Color palette'
          },
          {
            src: 'assets/images/projects/portfolio/components/inputs-design-system.webp',
            alt: 'Inputs'
          },
          {
            src: 'assets/images/projects/portfolio/components/buttons-design-system.webp',
            alt: 'Buttons'
          }
        ]
      },
      footer: {
        projectName: 'portfolio',
        subtitle: 'Thanks For Watching!',
        image: {
          src: 'assets/images/projects/portfolio/deer.svg',
          alt: 'thanks'
        },
        paragraphsSide: [
          'Thank you for watching this presentation. I appreciate your time and attention, and I hope you enjoyed learning about this project. If you have any questions or feedback, please feel free to reach out. Thank you!'
        ],
        ctaSides: [
          {
            text: 'Development Case study Coming Soon',
            size: 'default',
            color: 'disable-white',
            ariaLabel: 'Coming soon',
            showIconRight: true,
            // iconRight: 'dev-tag',
            iconRight: 'pending',
            showIconLeft: false
          }
        ]
      }
    }
}
}

export interface PortfolioProjectConfig {
  navbar: NavbarRegular;
  header: HeaderProjectConfig;
  overview: ProjectDynamicSectionConfig;
  process: ProjectProcessConfig;
  problemSolution: ProjectProblemSolutionConfig;
  clientPage: ProjectMonoDynamicSectionConfig;
  theGoal: ProjectSectionBulletsConfig;
  figmaConfig: FigmaProjectConfig;
  figmaCompsConfig: FigmaProjectConfig;
  figmaProjectsConfig: FigmaProjectConfig;
  styleGuide: ProjectStyleGuideConfig;
  designSystem: ProjectDesignSystemConfig;
  footer: ProjectFinalSectionConfig;
}
