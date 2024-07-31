import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { HeaderProjectConfig, ProjectComponentsLibraryShowConfig, ProjectDesignSystemConfig, ProjectDynamicSectionConfig, ProjectFinalSectionConfig, ProjectMonoDynamicSectionConfig, ProjectPersonasConfig, 
  ProjectProblemSolutionConfig, ProjectProcessConfig, ProjectSectionBulletsConfig, 
  ProjectSectionButtonConfig,
  ProjectSectionJumpConfig} from '@shared/index';

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
            src: 'assets/images/projects/tierro/header.webp',
            alt: 'Tierro project screens on mobile,tablet and desktop'
          },
          cta: {
            text: 'Take Me To The Live Site',
            size: 'default',
            color: 'tierro',
            ariaLabel: 'Go to TierroMusic website',
            showIconRight: true,
            iconRight: 'arrow_right_line',
            showIconLeft: false,
            outLink: 'https://www.tierromusic.com/'
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
                src: 'assets/images/projects/tierro/desktop-client.webp',
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
          title: 'The Process',
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
            src: 'assets/images/projects/tierro/desktop-client2.webp',
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
            src: 'assets/images/projects/tierro/desktop-client2.webp',
            alt: 'Tierro client website page on laptop screen'
          },
          dir: 'rtl'
        },
        theGoal: {
          projectName: 'tierro',
          style: 'columns-2-center text-center',
          title: 'Vision',
          subtitle: 'The Goal',
          paragraphs: [
            'The objective was to establish a professional and engaging online presence for the music producer. This involved designing a visually appealing webpage for clients and fans to explore the producer\'s work and a user-friendly admin page for the producer to manage and update content easily. The project aimed to reflect the producer\'s unique artistic vision and brand identity, showcase their music seamlessly, and provide a dynamic platform that could adapt to their evolving needs.'
          ],
          bullets: [
            {
              iconName: 'thumb_up_circle',
              title: 'Professional Presence',
              text: 'Establish a professional and engaging online presence for the music producer.'
            },
            {
              iconName: 'humans',
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
          specialClass: 'paragraph-yellow-title audio-plug',
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
        },
        personas: {
          projectName: 'tierro',
          subtitle: 'Personas',
          paragraphs: [
            'To effectively address the needs of both the music producer and their audience, detailed personas were developed based on research and user insights.'
          ],
          personas: [
            {
              personaImage: {
                src: 'assets/images/projects/tierro/persona-sarah.webp',
                alt: 'Female persona'
              },
              personaName: 'Sarah',
              personaBulletsSections: [
                  {
                    bullets: [
                      {
                        bulletIcon: 'user',
                        bulletTitle: 'Age',
                        bulletText: '28 years'
                      },
                      {
                        bulletIcon: 'location_tag',
                        bulletTitle: 'Location',
                        bulletText: 'Los Angeles, CA'
                      },
                      {
                        bulletIcon: 'collage_cap',
                        bulletTitle: 'Education',
                        bulletText: 'Bachelor\'s Degree in Music'
                      },
                      {
                        bulletIcon: 'settings',
                        bulletTitle: 'Occupation',
                        bulletText: 'Indie Musician'
                      }
                    ]
                  },
                  {
                    bulletsTitle: 'Wants & Needs',
                    bullets: [
                      {
                        bulletText: '😁 Reliable music producer for collaboration'
                      },
                      {
                        bulletText: '😁 Easy access to the producer\'s portfolio'
                      },
                      {
                        bulletText: '😁 Clear communication and feedback channels'
                      }
                    ]
                  },
                  {
                    bulletsTitle: 'Frustrations',
                    bullets: [
                      {
                        bulletText: '🥺 Difficulty finding producers with a strong online presence'
                      },
                      {
                        bulletText: '🥺 Limited access to high-quality work samples'
                      },
                      {
                        bulletText: '🥺 Time-consuming search process'
                      }
                    ]
                  }
              ],
              bio: {
                title: 'Bio',
                bioContent: 'Sarah is a dedicated indie musician based in Los Angeles. She is constantly looking for talented producers to collaborate with on her projects. Sarah values efficiency and clarity in communication and is frustrated by the lack of easily accessible information about potential collaborators.',
              }
            },
            {
              personaImage: {
               src: 'assets/images/projects/tierro/persona-alex.webp',
                alt: 'Male persona'
              },
              personaName: 'Alex',
              personaBulletsSections: [
                  {
                    bullets: [
                      {
                        bulletIcon: 'user',
                        bulletTitle: 'Age',
                        bulletText: '22 years'
                      },
                      {
                        bulletIcon: 'location_tag',
                        bulletTitle: 'Location',
                        bulletText: 'Austin, TX'
                      },
                      {
                        bulletIcon: 'collage_cap',
                        bulletTitle: 'Education',
                        bulletText: 'College Student, studying Communications'
                      },
                      {
                        bulletIcon: 'settings',
                        bulletTitle: 'Occupation',
                        bulletText: 'College Student'
                      }
                    ]
                  },
                  {
                    bulletsTitle: 'Wants & Needs',
                    bullets: [
                      {
                        bulletText: '😁 Discover new and exciting music'
                      },
                      {
                        bulletText: '😁 Learn more about favorite music producers'
                      },
                      {
                        bulletText: '😁 Access to curated music collections'
                      }
                    ]
                  },
                  {
                    bulletsTitle: 'Frustrations',
                    bullets: [
                      {
                        bulletText: '🥺 Limited access to high-quality, curated music'
                      },
                      {
                        bulletText: '🥺 Difficulty finding detailed information about producers'
                      },
                      {
                        bulletText: '🥺 Cluttered and confusing websites'
                      }
                    ]
                  }
              ],
              bio: {
                title: 'Bio',
                bioContent: 'Alex is a college student with a passion for discovering new music. He enjoys learning about the backgrounds of his favorite music producers and sharing new finds with friends. Alex values easy navigation and aesthetically pleasing websites that provide comprehensive information.',
              }
            },
            {
              personaImage: {
              src: 'assets/images/projects/tierro/persona-emily.webp',
                alt: 'Female persona'
              },
              personaName: 'Emily',
              personaBulletsSections: [
                  {
                    bullets: [
                      {
                        bulletIcon: 'user',
                        bulletTitle: 'Age',
                        bulletText: '30 years'
                      },
                      {
                        bulletIcon: 'location_tag',
                        bulletTitle: 'Location',
                        bulletText: 'Nashville, TN'
                      },
                      {
                        bulletIcon: 'collage_cap',
                        bulletTitle: 'Education',
                        bulletText: 'Bachelor\'s Degree in Vocal Performance'
                      },
                      {
                        bulletIcon: 'settings',
                        bulletTitle: 'Occupation',
                        bulletText: 'Singer and Songwriter'
                      }
                    ]
                  },
                  {
                    bulletsTitle: 'Wants & Needs',
                    bullets: [
                      {
                        bulletText: '😁 Singer and Songwriter'
                      },
                      {
                        bulletText: '😁 A portfolio showcasing successful collaborations with other singers'
                      },
                      {
                        bulletText: '😁 Easy access to contact and booking information'
                      }
                    ]
                  },
                  {
                    bulletsTitle: 'Frustrations',
                    bullets: [
                      {
                        bulletText: '🥺 Limited information about the producer\'s experience with vocalists'
                      },
                      {
                        bulletText: '🥺 Difficulty finding a producer who aligns with her artistic vision'
                      },
                      {
                        bulletText: '🥺 Difficulty finding a producer who aligns with her artistic vision'
                      }
                    ]
                  }
              ],
              bio: {
                title: 'Bio',
                bioContent: 'Emily is a professional singer and songwriter based in Nashville. She is looking for a music producer who can help her bring her creative vision to life. Emily values finding a producer who understands her musical style and has a proven track record of successful collaborations with other singers. She is often frustrated by the limited information available about producers experience with vocalists and the time-consuming process of finding the right collaborator.',
              }
            }
          ]
        },
        insights: {
          projectName: 'tierro',
          style: 'text-center two-rows',
          title: 'Discover',
          subtitle: 'Insights',
          paragraphs: [
            'Through detailed analysis and user research, several key insights were identified to guide the design and development of the project'
          ],
          bullets: [
            {
              iconName: 'thumb_up',
              title: 'Engagement',
              text: 'Engaging visuals and intuitive design elements are crucial for capturing and maintaining user interest.'
            },
            {
              iconName: 'puzzle',
              title: 'Customization Needs',
              text: 'Users value the ability to customize and manage content easily, particularly for showcasing music and updates.'
            },
            {
              iconName: 'settings',
              title: 'Seamless Navigation',
              text: 'A user-friendly interface with seamless navigation is essential for both clients and producers to interact effectively with the site.'
            },
            {
              iconName: 'palette',
              title: 'Positive Reinforcement',
              text: 'Providing clear, positive feedback and updates helps in maintaining user engagement and satisfaction.'
            },
            {
              iconName: 'music-note',
              title: 'Consistency & Reliability',
              text: 'Consistent design and reliable functionality are critical to building trust and ensuring a smooth user experience.'
            }
          ]
        },
        componentsLibraryShow: {
          projectName: 'tierro',
          title: 'Producer Page',
          subtitle: 'Components Library',
          paragraphs: [
            'The components library included a set of reusable UI elements such as buttons, icons, forms, and navigation menus. These components were designed to maintain visual consistency and functionality across the webpage. The library ensured that all elements were cohesive, user-friendly, and aligned with the overall design aesthetic of the music producer\'s brand.'
          ],
          // ToDo: update the images to be more details and transparent  
          components: [
            {
              classes: 'w-300',
              desktopImage: {
                src: 'assets/images/projects/tierro/components/carousel-review-desktop.webp',
                alt: 'component of a review carousel item'
              },
              tabletImage: {
                src: 'assets/images/projects/tierro/components/carousel-review-desktop.webp',
                alt: 'component of a review carousel item'
              },
              mobileImage: {
                src: 'assets/images/projects/tierro/components/carousel-review-mobile.webp',
                alt: 'component of a review carousel item'
              }
            },
            {
              classes: 'w-300',
              desktopImage: {
                src: 'assets/images/projects/tierro/components/side-image-desktop.webp',
                alt: 'component of a section side image'
              },
              tabletImage: {
                src: 'assets/images/projects/tierro/components/side-image-desktop.webp',
                 alt: 'component of a section side image'
              },
              mobileImage: {
                src: 'assets/images/projects/tierro/components/side-image-desktop.webp',
                 alt: 'component of a section side image'
              }
            },
            {
              classes: 'w-300',
              desktopImage: {
                src: 'assets/images/projects/tierro/components/buttons-desktop.webp',
                alt: 'Button components'
              },
              tabletImage: {
                src: 'assets/images/projects/tierro/components/buttons-desktop.webp',
                alt: 'Button components'
              },
              mobileImage: {
                src: 'assets/images/projects/tierro/components/buttons-desktop.webp',
                alt: 'Button components'
              }
            },
            {
              classes: 'w-1000',
              desktopImage: {
                src: 'assets/images/projects/tierro/components/cards-desktop.webp',
                alt: 'component of a section image on the left or right and text from the side'
              },
              tabletImage: {
                src: 'assets/images/projects/tierro/components/cards-tablet.webp',
                alt: 'component of a section image on the left or right and text from the side'
              },
              mobileImage: {
                src: 'assets/images/projects/tierro/components/cards-mobile.webp',
                alt: 'component of a section image on the top or bottom and text from the bellow or above'
              }
            },
            {
              classes: 'w-1000',
              desktopImage: {
                src: 'assets/images/projects/tierro/components/music-player-desktop.webp',
                alt: 'component of a music player'
              },
              tabletImage: {
                src: 'assets/images/projects/tierro/components/music-player-tablet.webp',
                alt: 'component of a music player'
              },
              mobileImage: {
                src: 'assets/images/projects/tierro/components/music-player-mobile.webp',
                alt: 'component of a music player'
              }
            },
            {
              classes: 'w-1000',
              desktopImage: {
                src: 'assets/images/projects/tierro/components/contact-desktop.webp',
                alt: 'component of a contact section'
              },
              tabletImage: {
                src: 'assets/images/projects/tierro/components/contact-tablet.webp',
                alt: 'component of a contact section'
              },
              mobileImage: {
                src: 'assets/images/projects/tierro/components/contact-mobile.webp',
                alt: 'component of a contact section'
              }
            }
          ]
        },
        finalDesign: {
          projectName: 'tierro',
          specialClass: 'text-center',
          title: 'Final Design',
          subtitle: 'Producer Page',
          cta: {
            text: 'Take Me To The Live Site',
            size: 'default',
            color: 'tierro',
            ariaLabel: 'Go to TierroMusic website',
            showIconRight: true,
            iconRight: 'arrow_right_line',
            showIconLeft: false,
            outLink: 'https://www.tierromusic.com/'
          }
        },
        designSystem: {
          projectName: 'tierro',
          specialClass: 'text-center orange-paragraph',
          title: 'Final Design',
          subtitle: 'Admin Page',
          paragraphs: [
            'Design System'
          ],
          cards: [
            {
              src: 'assets/images/projects/tierro/components/typography-design-system.webp',
              alt: 'Typography'
            },
            {
              src: 'assets/images/projects/tierro/components/color-palette-design-system.webp',
              alt: 'Color palette'
            },
            {
              src: 'assets/images/projects/tierro/components/inputs-design-system.webp',
              alt: 'Inputs'
            },
            {
              src: 'assets/images/projects/tierro/components/buttons-design-system.webp',
              alt: 'Buttons'
            }
          ]
        },
        adminFinalDesign: {
          projectName: 'tierro',
          specialClass: 'text-center',
          title: 'Final Design',
          subtitle: 'Admin Page',
          sections: [
            {
              classes: '',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/login-page.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Login Screen',
              backgroundItem: 'yellow-circle-right',
              paragraphs: [
                'The Login Screen provides a secure entry point for the music producer\'s admin page, featuring fields for email and password. It ensures quick access while maintaining security through standard authentication protocols.'
              ]
            },
            {
              classes: 'reverse',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/songs-screen.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Songs Screen',
              backgroundItem: 'yellow-circle-left',
              paragraphs: [
                'The Songs Screen allows the music producer to manage his song collection efficiently. He can change the order of the songs, edit existing ones, and add new tracks. This screen also provides a comprehensive overview of all the songs in his portfolio.'
              ]
            },
            {
              classes: '',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/add-song-edit.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Add Song / Edit Song',
              backgroundItem: 'yellow-circle-right',
              paragraphs: [
                'The Add Song and Edit Song screens provide intuitive interfaces for the music producer to manage his tracks. On these screens, he can input details such as title, artist, genre, song picture, and Spotify link if available, and select whether the track is a song or a demo. The Edit Song screen allows for easy modifications to existing songs, ensuring all information and files are up-to-date.'
              ]
            },
            {
              classes: 'reverse',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/reviews-screen.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Reviews Screen',
              backgroundItem: 'yellow-circle-left',
              paragraphs: [
                'The Reviews Screen allows the music producer to view all the reviews he has received. He can change the order of the reviews displayed in the carousel on his portfolio, as well as add new reviews and edit existing ones. This ensures his portfolio showcases the most relevant and up-to-date feedback.'
              ]
            },
            {
              classes: '',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/add-review-edit.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Add Review / Edit Review',
              backgroundItem: 'yellow-circle-right',
              paragraphs: [
                'The Add Review and Edit Review screens provide the music producer with the tools to manage his reviews. He can input the review image, review profile details (name and title), the review content, and social links for Spotify and Instagram. These screens enable him to add new reviews or update existing ones, ensuring his portfolio reflects the most accurate and current testimonials.'
              ]
            },
            {
              classes: 'reverse',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/settings-screen.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Settings Screen',
              backgroundItem: 'yellow-circle-left',
              paragraphs: [
                'The Settings Screen allows the music producer to manage his account details comprehensively. He can view and edit his personal profile, user details, and payment methods. This screen ensures he has full control over his personal and financial information, maintaining accuracy and up-to-date records.'
              ]
            },
            {
              classes: '',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/edit-personal-profile-screen.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Edit Personal Profile',
              backgroundItem: 'yellow-circle-right',
              paragraphs: [
                'The Edit Personal Profile screen enables the music producer to update his personal information. The inputs for this screen include profile image, first name, last name, date of birth, and gender. This allows him to keep his profile current and accurate.'
              ]
            },
            {
              classes: 'reverse',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/edit-user-details-screen.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Edit User Details',
              backgroundItem: 'yellow-circle-left',
              paragraphs: [
                'The Edit User Details screen allows the music producer to update his account information. The inputs for this screen include username, password, email, and phone number. This ensures his contact and login details are always accurate and up-to-date.'
              ]
            },
            {
              classes: '',
              img: {
                src: 'assets/images/projects/tierro/admin-screens/edit-payment-screen.webp',
                alt: 'Laptop with login screen of the admin page for tierro'
              },
              title: 'Edit Payment Methods',
              backgroundItem: 'yellow-circle-right',
              paragraphs: [
                'The Edit Payment Methods screen allows the music producer to manage his financial details. The inputs for this screen include card type, cardholder name, expiration date, CVV, and card number. This ensures that his payment information is always current and secure.'
              ]
            },
          ]
        },
        conclusions: {
          projectName: 'tierro',
          specialClass: 'dark-back conclusions',
          title: 'Conclusions',
          subtitle: 'What did I Learn?',
          paragraphs: [
            'Working on this project provided valuable insights into the importance of integrating visual identity with functional design. I learned how to effectively combine artistic elements with practical features to create a cohesive and engaging user experience. The process of designing and developing a custom music player, along with an admin page for content management, highlighted the need for user-friendly interfaces that cater to both creative and administrative needs.',
            'Additionally, the iterative design process reinforced the value of refining ideas through sketches and prototypes to achieve a polished final product. Overall, this project enhanced my skills in balancing aesthetics with usability and tailoring designs to meet the specific needs of a client.'
          ],
          image: {
            src: 'assets/images/projects/tierro/logo-color.svg',
            alt: 'Tierro project logo'
          },
          dir: 'ltr'
        },
        footer: {
          projectName: 'tierro',
          subtitle: 'Thanks For Watching!',
          image: {
            src: 'assets/images/projects/tierro/box-d.svg',
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
  personas: ProjectPersonasConfig;
  insights: ProjectSectionBulletsConfig;
  componentsLibraryShow: ProjectComponentsLibraryShowConfig;
  finalDesign: ProjectSectionButtonConfig;
  designSystem: ProjectDesignSystemConfig;
  adminFinalDesign: ProjectSectionJumpConfig;
  conclusions: ProjectMonoDynamicSectionConfig;
  footer: ProjectFinalSectionConfig;
}
