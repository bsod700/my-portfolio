import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { HeaderProjectConfig, ProjectDynamicSectionConfig, ProjectMonoDynamicSectionConfig, ProjectProblemSolutionConfig, ProjectProcessConfig, ProjectSectionBulletsConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class TierroProjectConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
  
    getPageConfig(): TierroProjectConfig {
      return {
        navbar: this.defaultConfigService.getRegularNavbar(),
        header: {
          projectName: 'tierro',
          logo: {
            src: 'assets/images/projects/tierro/logo-color.svg',
            alt: 'Tierro project logo'
          },
          title: 'Showcasing Musical Creativity',
          subtitle: 'Innovative Webpage and Logo Design for a Music Producer',
          bullets: [
            {
              title: 'Industry',
              subtitle: 'Music'
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
            src: 'assets/images/projects/tierro/header.png',
            alt: 'Tierro project screens on mobile,tablet and desktop'
          }
        },
        overview: {
          projectName: 'tierro',
          sections: [
            {
              dir: 'rtl',
              title: 'Project Overview',
              subtitle: 'Background',
              paragraphs: [
                'In the ever-evolving music industry, having a strong online presence is crucial for artists to showcase their work and connect with their audience. As a music producer, my client needed a professional and visually appealing webpage to highlight their musical creativity and talent. Additionally, a unique and memorable logo was essential to establish their brand identity. To enhance the user experience, I also developed a custom music player, tailored specifically for the client, to seamlessly showcase their music. This project aimed to design and develop a captivating webpage, an innovative logo, and a unique music player that reflect the music producer\'s artistic vision and style.'
              ],
              img: {
                src: 'assets/images/projects/tierro/desktop-client.png',
                alt: 'Tierro client website on laptop screen'
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
                  text: 'Created a visually appealing and user-friendly webpage layout that effectively showcases the music producer\'s work.'
                },
                {
                  title: 'Logo Design:',
                  text: 'Developed a unique and memorable logo that reflects the client\'s brand identity and artistic vision.'
                },
                {
                  title: 'Custom Music Player Development:',
                  text: 'Built a custom music player tailored specifically for the client to seamlessly showcase their music.'
                },
                {
                  title: 'Responsive Design:',
                  text: 'Ensured the webpage is fully responsive and looks great on all devices, including desktops, tablets, and smartphones.'
                },
                {
                  title: 'User Experience (UX) Design:',
                  text: 'Designed an intuitive and engaging user experience that encourages visitors to explore the music producer\'s work.'
                },
                {
                  title: 'Web Development:',
                  text: 'Coded and implemented the design, ensuring smooth functionality and performance of the webpage and music player.'
                },
                {
                  title: 'Admin Page Development:',
                  text: 'Developed an admin page for the client to easily update content, such as reviews and music, using databases and forms.'
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
          projectName: 'tierro',
          title: 'The What',
          subtitle: 'Design Process',
          paragraphs: [
            'The design process for this project began with comprehensive research to understand the client\'s unique needs and the latest trends in music industry web design. This foundational step ensured that the resulting webpage would be both visually appealing and highly functional. Next, I created detailed wireframes to map out the layout and structure of the webpage, focusing on enhancing usability and aesthetic appeal.',
            'With a clear blueprint in place, I developed engaging visuals and a cohesive brand identity, which included a unique logo and a distinctive visual style that captured the essence of the music producer\'s brand. The custom music player was meticulously designed and developed to showcase the client’s music seamlessly, adding a unique interactive element to the site.',
            'To provide the client with control over their content, I designed and developed an admin page, allowing them to easily update reviews and music. This feature was crucial for maintaining the site\'s relevance and dynamism. The project then moved into an extensive testing phase, where every aspect of the site was rigorously tested to identify and resolve any issues, ensuring a smooth and error-free user experience.',
            'Finally, the optimized product was deployed, marking the successful launch of a professional and engaging online presence for the music producer. This comprehensive design process not only met but exceeded the client\'s expectations, delivering a product that truly reflected their artistic vision and brand identity.'
          ],
          process: [
            {
              title: 'Research',
              text: 'Conducted thorough research to understand the client\'s needs and current trends in music industry web design.',
            },
            {
              title: 'Wireframes',
              text: 'Created wireframes to visualize the layout and structure of the webpage, focusing on usability and aesthetics.',
            },
            {
              title: 'Design',
              text: 'Developed engaging visuals and a cohesive brand identity, including the logo and overall visual style.',
            },
            {
              title: 'Development',
              text: 'Implemented the design using Angular, ensuring responsiveness and performance, and developing a custom music player.',
            },
            {
              title: 'Admin Page Development',
              text: 'Created an admin page for the client to update content such as reviews and music.',
            },
            {
              title: 'Testing',
              text: 'Conducted extensive testing to identify and resolve any issues, ensuring a smooth and error-free user experience.',
            },
            {
              title: 'Launch',
              text: 'Deployed the final product, ensuring everything was optimized and functioning as intended.',
            },
          ]
        },
        problemSolution: {
          projectName: 'tierro',
          problem: {
            title: 'Problem',
            paragraph: [
              'The music producer needed a professional and visually appealing online presence to showcase their work, connect with their audience, and establish a strong brand identity. Existing generic platforms didn\'t adequately reflect their unique artistic vision or provide the functionality to manage and update their content easily. Additionally, there was a need for a customized music player to feature their tracks seamlessly and interactively.'
            ]
          },
          solution: {
            title: 'Solution',
            paragraph: [
              'I designed and developed a bespoke webpage that visually represents the music producer\'s brand and artistic vision. This included creating a unique logo and an engaging visual style. A custom music player was developed to showcase their music interactively. To ensure the producer could easily manage their content, I designed and developed an admin page, enabling them to update reviews and music effortlessly. This comprehensive solution provided a professional, user-friendly, and dynamic online presence tailored to the music producer\'s needs.'
            ]
          }
        },
        clientPage: {
          projectName: 'tierro',
          subtitle: 'Producer Client Page',
          paragraphs: [
            'The Producer Client Page is a visually appealing and user-friendly platform designed for clients and fans to explore the music producer\'s work.'
          ],
          bullets: [
            {
              iconName: 'music-note',
              title: 'Showcase Music',
              text: 'Features a custom music player to seamlessly showcase the producer\'s tracks.'
            },
            {
              iconName: 'palette',
              title: 'Engaging Visuals',
              text: 'Utilizes engaging visuals and a cohesive brand identity to capture the essence of the music producer\'s style.'
            },
            {
              iconName: 'thumb_up',
              title: 'Client Reviews',
              text: 'Highlights client reviews to build credibility and connect with the audience.'
            }
          ],
          image: {
            src: 'assets/images/projects/tierro/desktop-client2.png',
            alt: 'Tierro client website page on laptop screen'
          },
          dir: 'ltr'
        },
        adminPage: {
          projectName: 'tierro',
          subtitle: 'Admin Page',
          paragraphs: [
            'The Admin Page is a private, user-friendly interface designed for the music producer to manage and update their content easily.'
          ],
          bullets: [
            {
              iconName: 'music-note',
              title: 'Content Management',
              text: 'Allows the producer to update reviews and music tracks effortlessly.'
            },
            {
              iconName: 'palette',
              title: 'User-Friendly Interface',
              text: 'Designed for ease of use, ensuring the producer can quickly make changes.'
            },
            {
              iconName: 'thumb_up',
              title: 'Dynamic Updates',
              text: 'Ensures the public-facing site remains current and engaging by allowing for real-time content updates.'
            }
          ],
          image: {
            src: 'assets/images/projects/tierro/desktop-client2.png',
            alt: 'Tierro client website page on laptop screen'
          },
          dir: 'rtl'
        },
        theGoal: {
          projectName: 'tierro',
          style: '2-columns',
          title: 'Vision',
          subtitle: 'The Goal',
          paragraphs: [
            'The objective was to establish a professional and engaging online presence for the music producer. This involved designing a visually appealing webpage for clients and fans to explore the producer\'s work and a user-friendly admin page for the producer to manage and update content easily. The project aimed to reflect the producer\'s unique artistic vision and brand identity, showcase their music seamlessly, and provide a dynamic platform that could adapt to their evolving needs.'
          ],
          bullets: [
            {
              iconName: 'thumb_up',
              title: 'Professional Presence',
              text: 'Establish a professional and engaging online presence for the music producer.'
            },
            {
              iconName: 'users',
              title: 'Client-Facing Webpage',
              text: 'Design a visually appealing webpage for clients and fans to explore the producer\'s work.'
            },
            {
              iconName: 'settings',
              title: 'Admin Page',
              text: 'Create a user-friendly admin page for the producer to manage and update content easily.'
            },
            {
              iconName: 'palette',
              title: 'Brand Identity',
              text: 'Reflect the producer\'s unique artistic vision and brand identity.'
            },
            {
              iconName: 'music-note',
              title: 'Showcase Music',
              text: 'Seamlessly showcase the producer\'s music with a custom music player.'
            },
            {
              iconName: 'tune',
              title: 'Dynamic Platform',
              text: 'Provide a dynamic platform that can adapt to the producer\'s evolving needs.'
            }
          ]
        },
        targetAudience: {
          projectName: 'tierro',
          specialClass: 'paragraph-yellow-title',
          title: 'Research',
          subtitle: 'Target Audience',
          paragraphs: [
            'Clients and Fans'
          ],
          bullets: [
            {
              iconName: 'music-note',
              title: 'Music Enthusiasts',
              text: 'Individuals who enjoy and appreciate the music produced by the artist.'
            },
            {
              iconName: 'diversity',
              title: 'Potential Clients',
              text: 'Artists, bands, and other music industry professionals looking for a music producer to collaborate with.'
            },
            {
              iconName: 'hand-up-person',
              title: 'General Audience',
              text: 'Visitors who are curious about the producer\'s work and want to explore their music and reviews.'
            }
          ],
          dir: 'ltr'
        }
      }
  }
}
export interface TierroProjectConfig {
  navbar: NavbarRegular;
  header: HeaderProjectConfig;
  overview: ProjectDynamicSectionConfig;
  process: ProjectProcessConfig;
  problemSolution: ProjectProblemSolutionConfig;
  clientPage: ProjectMonoDynamicSectionConfig;
  adminPage: ProjectMonoDynamicSectionConfig;
  theGoal: ProjectSectionBulletsConfig;
  targetAudience: ProjectMonoDynamicSectionConfig;
}
