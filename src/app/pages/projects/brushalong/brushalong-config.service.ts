import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { HeaderProjectConfig, ProjectComponentsLibraryShowConfig, ProjectFinalSectionConfig, ProjectMonoDynamicSectionConfig, ProjectOverviewConfig, ProjectPersonasConfig, 
  ProjectProblemSolutionConfig, ProjectProcessConfig, ProjectPrototypeConfig, ProjectSectionBulletsConfig, 
  ProjectSectionJumpConfig,
  ProjectStyleGuideConfig,
  ProjectWireframesConfig} from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class BrushAlongConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
  
  getPageConfig(): BrushAlongProjectConfig {
    return {
      navbar: {
        logo: this.defaultConfigService.getLogo(),
        links: this.defaultConfigService.getRegularNavbar().links,
        cta: {
          text: 'Contact Me',
          size: 'regular',
          color: 'brushalong-blue',
          ariaLabel: 'string',
          scrollTo: 'contact',
          showIconLeft: false,
          showIconRight: false
        }
      },
      header: {
        projectName: 'brushalong',
        logo: {
          src: 'assets/images/projects/brush-along/symbol.webp',
          alt: 'Tierro project logo'
        },
        title: 'Motivating kids for better brushing!',
        subtitle: 'Fun brushing tracker game app',
        bullets: [
          {
            title: 'Industry',
            subtitle: 'Education'
          },
          {
            title: 'Platform',
            subtitle: 'IOS'
          },
          {
            title: 'Role',
            subtitle: 'UI/UX Designer'
          }
        ],
        img: {
          src: 'assets/images/projects/brush-along/header-image-mobile.webp',
          alt: 'Tierro project screens on mobile,tablet and desktop'
        }
      },
      overview: {
        projectName: 'brushalong',
        specialClass: 'blue-bg',
        img: {
          src: 'assets/images/projects/brush-along/project-overview-image.webp',
          alt: ''
        },
        title: 'Project Overview',
        text: [
          {
            subtitle: 'Background',
            paragraphs: [
              'This project is all about creating a fun and helpful app for kids to improve their brushing habits. Many parents struggle to get their children to brush properly and consistently. This app turns brushing into an engaging game, making it enjoyable for kids and easy for parents to track their progress. Designed for a competition, this app showcases a playful yet effective approach to better dental health.'
            ]
          },
          {
            subtitle: 'Role & Responsibilities',
            paragraphs: [
              'As the designer, I conceptualized and developed the overall design of the app, ensuring it is visually appealing and engaging for children. I created user-friendly interfaces and intuitive navigation to enhance the user experience for both kids and parents. I developed interactive game elements to motivate children to brush their teeth properly and regularly. Additionally, I designed a tracking system that allows parents to monitor their children\'s brushing habits effectively. Lastly, I prepared the project for submission to the competition, highlighting innovative features and design elements.'
            ]
          }
        ]
      },
      process: {
        projectName: 'brushalong',
        title: 'The Process',
        subtitle: 'Design Process',
        paragraphs: [
          'The design process for "Brush Along" involved several steps. I began with research to understand the challenges and existing solutions for children\'s brushing habits. Next, I mapped out user flows for seamless navigation. Wireframes were created to visualize the layout and functionality. Engaging visuals with fun characters and rewards were designed. Finally, I developed a clickable prototype for testing and feedback.'
        ],
        process: [
          {
            title: 'Research',
            text: 'Studied challenges and existing solutions for kids\' brushing habits.',
          },
          {
            title: 'User Flow',
            text: 'Mapped out seamless navigation for kids and parents.',
          },
          {
            title: 'Wireframes',
            text: 'Visualized layout and functionality for ease of use.',
          },
          {
            title: 'Design',
            text: 'Created engaging visuals with fun characters and rewards.',
          },
          {
            title: 'Clickable Prototype',
            text: 'Built a prototype for testing and feedback.',
          }
        ]
      },
      problemSolution: {
        projectName: 'brushalong',
        problem: {
          title: 'Problem',
          paragraph: [
            'Children often find it difficult to properly and thoroughly brush their teeth, and parents struggle to keep track of their children\'s brushing habits. The brushing process lacks motivation and efficiency, leading to inadequate oral hygiene, which can result in dental and gum problems in the future.'
          ]
        },
        solution: {
          title: 'Solution',
          paragraph: [
            '"Brush Along" offers a solution to this problem. The app features a variety of characters and rewards that make brushing fun and engaging for children. Each time a child brushes their teeth at the designated time, they receive a reward that they can place on the character of their choice. Consistent brushing for five days unlocks new characters that children can dress up and accessorize with items received from brushing sessions. The interactive characters provide verbal praise and happiness for the child\'s accomplishments, not just rewards. Additionally, parents can conveniently track their child\'s brushing habits, update and modify brushing times, and determine if their child brushed properly. This combination of fun and monitoring ensures better brushing habits and improved oral hygiene for children.'
          ]
        }
      },
      clientPage: {
        projectName: 'brushalong',
        subtitle: 'Mobile Game for Children',
        paragraphs: [
          'The app makes brushing fun and engaging with interactive characters and rewards. It encourages consistent brushing habits through a game-based approach and provides positive reinforcement with verbal praise and rewards.'
        ],
        bullets: [
          {
            iconName: 'psychology',
            title: 'Engaging Experience',
            text: 'Makes brushing fun with interactive characters and rewards.'
          },
          {
            iconName: 'calendar',
            title: 'Consistent Habits',
            text: 'Encourages regular brushing through a game-based approach.'
          },
          {
            iconName: 'thumb_up',
            title: 'Positive Reinforcement',
            text: 'Provides verbal praise and rewards for accomplishments.'
          }
        ],
        image: {
          src: 'assets/images/projects/brush-along/mobile-game.webp',
          alt: 'Tierro client website page on laptop screen'
        },
        dir: 'ltr'
      },
      adminPage: {
        projectName: 'brushalong',
        subtitle: 'Mobile App for Parents',
        paragraphs: [
          'The app allows easy tracking of children\'s brushing habits and enables setting and modifying designated brushing times. It helps ensure children are brushing properly and consistently.'
        ],
        bullets: [
          {
            iconName: 'tracking',
            title: 'Easy Tracking',
            text: 'Allows monitoring of children\'s brushing habits.'
          },
          {
            iconName: 'tune',
            title: 'Customizable Schedule',
            text: 'Enables setting and modifying brushing times.'
          },
          {
            iconName: 'smile',
            title: 'Effective Monitoring',
            text: 'Ensures children brush properly and consistently.'
          }
        ],
        image: {
          src: 'assets/images/projects/brush-along/mobile-app.webp',
          alt: 'Tierro client website page on laptop screen'
        },
        dir: 'rtl'
      },
      theGoal: {
        projectName: 'brushalong',
        style: 'two-rows text-center wooden-sign',
        title: 'Vision',
        subtitle: 'The Goal',
        paragraphs: [
          'The goal of "Brush Along" is to motivate children to develop proper and consistent brushing habits while providing parents with a convenient and effective way to monitor and improve their children\'s oral hygiene. By making brushing a fun and interactive experience, the app aims to promote better dental health for children.'
        ],
        bullets: [
          {
            iconName: 'smile',
            title: 'Healthy Habits',
            text: 'Children need motivation to brush properly and consistently for better oral health.'
          },
          {
            iconName: 'monitoring',
            title: 'Parental Tracking',
            text: 'Parents need a reliable way to monitor and improve their children\'s brushing habits.'
          },
          {
            iconName: 'psychology',
            title: 'Engagement',
            text: 'Kids enjoy a fun, interactive game that makes brushing enjoyable and rewarding.'
          },
          {
            iconName: 'tracking',
            title: 'Convenience',
            text: 'Parents can easily track and adjust brushing schedules through the app.'
          },
          {
            iconName: 'thumb_up',
            title: 'Positive Reinforcement',
            text: 'The app provides children with verbal praise and rewards, encouraging good brushing habits.'
          }
        ]
      },
      targetAudience: {
        projectName: 'brushalong',
        specialClass: 'reverse small-subtitle white-bg',
        img: {
          src: 'assets/images/projects/brush-along/audience.webp',
          alt: ''
        },
        title: 'Research',
        subtitle: 'Target Audience',
        text: [
          {
            subtitle: 'Children',
            paragraphs: [
              'The primary users are children who need motivation to brush their teeth properly and consistently. The app is designed to make the brushing process enjoyable and engaging for kids.'
            ]
          },
          {
            subtitle: 'Parents',
            paragraphs: [
              'The secondary users are parents who require an effective way to monitor and improve their children\'s brushing habits. The app offers tools for tracking and managing brushing schedules, ensuring better oral hygiene for their children.'
            ]
          }
        ]
      },
      personas: {
        projectName: 'brushalong',
        subtitle: 'Personas',
        paragraphs: [
          'To ensure the app meets the needs of both children and parents, I developed detailed personas based on user interviews and pain points.'
        ],
        personas: [
          {
            personaImage: {
              src: 'assets/images/projects/brush-along/persona-lily.webp',
              alt: 'child persona'
            },
            personaName: 'Lily',
            personaBulletsSections: [
                {
                  bullets: [
                    {
                      bulletIcon: 'user',
                      bulletTitle: 'Age',
                      bulletText: '6 years'
                    },
                    {
                      bulletIcon: 'location_tag',
                      bulletTitle: 'Location',
                      bulletText: 'San Francisco, CA'
                    },
                    {
                      bulletIcon: 'collage_cap',
                      bulletTitle: 'Education',
                      bulletText: 'Kindergarten'
                    },
                    {
                      bulletIcon: 'settings',
                      bulletTitle: 'Family',
                      bulletText: 'Lives with parents and an older brother'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Wants & Needs',
                  bullets: [
                    {
                      bulletText: '😁 Fun and engaging activities'
                    },
                    {
                      bulletText: '😁 Rewards and positive reinforcement'
                    },
                    {
                      bulletText: '😁 Easy-to-use and interactive apps'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Frustrations',
                  bullets: [
                    {
                      bulletText: '🥺 Gets bored easily'
                    },
                    {
                      bulletText: '🥺 Forgets to brush her teeth regularly'
                    },
                    {
                      bulletText: '🥺 Needs constant reminders'
                    }
                  ]
                }
            ],
            bio: {
              title: 'Bio',
              bioContent: 'Lily is a lively and imaginative 6-year-old who loves playing games on her tablet. She enjoys interactive characters and receives praise for her achievements. Her parents are looking for ways to make brushing teeth a more enjoyable and consistent habit for her.',
            }
          },
          {
            personaImage: {
             src: 'assets/images/projects/brush-along/persona-emma.webp',
              alt: 'Mother persona'
            },
            personaName: 'Emma',
            personaBulletsSections: [
                {
                  bullets: [
                    {
                      bulletIcon: 'user',
                      bulletTitle: 'Age',
                      bulletText: '34 years'
                    },
                    {
                      bulletIcon: 'location_tag',
                      bulletTitle: 'Location',
                      bulletText: 'San Francisco, CA'
                    },
                    {
                      bulletIcon: 'collage_cap',
                      bulletTitle: 'Education',
                      bulletText: 'Bachelor\'s Degree'
                    },
                    {
                      bulletIcon: 'settings',
                      bulletTitle: 'Family',
                      bulletText: 'Married with two young children'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Wants & Needs',
                  bullets: [
                    {
                      bulletText: '😁 Effective tracking of children\'s brushing habits'
                    },
                    {
                      bulletText: '😁 Reliable reminders and scheduling'
                    },
                    {
                      bulletText: '😁 Assurance that kids are brushing properly'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Frustrations',
                  bullets: [
                    {
                      bulletText: '🥺 Difficulty in monitoring kids\' brushing habits'
                    },
                    {
                      bulletText: '🥺 Kids often forget to brush or do it ineffectively'
                    },
                    {
                      bulletText: '🥺 Limited time to supervise brushing routines'
                    }
                  ]
                }
            ],
            bio: {
              title: 'Bio',
              bioContent: 'Emma is a busy marketing manager and mother of two young children. She is tech-savvy and uses various apps to help manage her household. Emma is looking for a solution that ensures her children maintain good brushing habits without requiring constant supervision.',
            }
          },
          {
            personaImage: {
            src: 'assets/images/projects/brush-along/persona-jack.webp',
              alt: 'child persona'
            },
            personaName: 'Jack',
            personaBulletsSections: [
                {
                  bullets: [
                    {
                      bulletIcon: 'user',
                      bulletTitle: 'Age',
                      bulletText: '5 years'
                    },
                    {
                      bulletIcon: 'location_tag',
                      bulletTitle: 'Location',
                      bulletText: 'New York, NY'
                    },
                    {
                      bulletIcon: 'collage_cap',
                      bulletTitle: 'Education',
                      bulletText: 'Preschool'
                    },
                    {
                      bulletIcon: 'settings',
                      bulletTitle: 'Occupation',
                      bulletText: 'Lives with parents and a younger sister'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Wants & Needs',
                  bullets: [
                    {
                      bulletText: '😁 Fun and interactive games'
                    },
                    {
                      bulletText: '😁 Positive reinforcement'
                    },
                    {
                      bulletText: '😁 Simple and engaging apps'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Frustrations',
                  bullets: [
                    {
                      bulletText: '🥺 Easily distracted'
                    },
                    {
                      bulletText: '🥺 Needs frequent reminders to brush'
                    },
                    {
                      bulletText: '🥺 Gets bored with routine activities'
                    }
                  ]
                }
            ],
            bio: {
              title: 'Bio',
              bioContent: 'Jack is an energetic and curious 5-year-old who loves playing games with sounds and characters on his tablet. His parents are looking for a fun way to keep him engaged in brushing his teeth and developing a consistent routine.',
            }
          },
          {
            personaImage: {
             src: 'assets/images/projects/brush-along/persona-david.webp',
              alt: 'Father persona'
            },
            personaName: 'David',
            personaBulletsSections: [
                {
                  bullets: [
                    {
                      bulletIcon: 'user',
                      bulletTitle: 'Age',
                      bulletText: '37 years'
                    },
                    {
                      bulletIcon: 'location_tag',
                      bulletTitle: 'Location',
                      bulletText: 'New York, NY'
                    },
                    {
                      bulletIcon: 'collage_cap',
                      bulletTitle: 'Education',
                      bulletText: 'Master\'s Degree'
                    },
                    {
                      bulletIcon: 'settings',
                      bulletTitle: 'Family',
                      bulletText: 'Married with two sons'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Wants & Needs',
                  bullets: [
                    {
                      bulletText: '😁 Reliable tracking of children\'s brushing habits'
                    },
                    {
                      bulletText: '😁 Assurance of proper brushing techniques'
                    },
                    {
                      bulletText: '😁 User-friendly app for managing children\'s routines'
                    }
                  ]
                },
                {
                  bulletsTitle: 'Frustrations',
                  bullets: [
                    {
                      bulletText: '🥺 Inconsistent brushing habits in kids'
                    },
                    {
                      bulletText: '🥺 Lack of immediate feedback on brushing quality'
                    },
                    {
                      bulletText: '🥺 Limited time to oversee daily routines'
                    }
                  ]
                }
            ],
            bio: {
              title: 'Bio',
              bioContent: 'David is an IT consultant and father of two young sons. He relies on technology to manage household tasks efficiently. David seeks a dependable app to ensure his children brush their teeth correctly and consistently without requiring constant supervision.',
            }
          }
        ]
      },
      insights: {
        projectName: 'brushalong',
        style: 'text-center two-rows white-bg',
        title: 'Discover',
        subtitle: 'Insights',
        paragraphs: [
          'The user personas revealed key insights into the needs and behaviors of both children and parents regarding oral hygiene habits. These insights will guide the design and functionality of the "Brush Along" app.'
        ],
        bullets: [
          {
            iconName: 'psychology',
            title: 'Engagement',
            text: 'Children like Lily and Jack need fun, interactive elements to stay engaged in brushing their teeth. Games and rewards are crucial motivators.'
          },
          {
            iconName: 'click',
            title: 'Ease of Use',
            text: 'Both children and parents prefer a simple and intuitive interface. Easy navigation and clear instructions are essential.'
          },
          {
            iconName: 'thumb_up',
            title: 'Positive Reinforcement',
            text: 'Positive feedback and rewards are effective in encouraging children to brush regularly and properly.'
          },
          {
            iconName: 'monitoring',
            title: 'Monitoring',
            text: 'Parents like Emma and David need reliable tools to monitor and track their children’s brushing habits. Customizable alerts and detailed reports are highly valued.'
          },
          {
            iconName: 'calendar',
            title: 'Consistency',
            text: 'Maintaining a consistent brushing routine is a common challenge. Features that help establish and stick to a routine are important for both children and parents.'
          },
          {
            iconName: 'tune',
            title: 'Flexibility',
            text: 'Parents appreciate the ability to use both mobile and tablet apps for monitoring, especially in households with multiple children.'
          },
          {
            iconName: 'lightning',
            title: 'Tech Savviness',
            text: 'Parents and children are comfortable with various tech interactions, including touchscreen and animated feedback, which enhances user engagement and adherence to brushing routines.'
          }
        ]
      },
      userFlow: {
        projectName: 'brushalong',
        specialClass: 'white-bg',
        img: {
          src: 'assets/images/projects/brush-along/user-flow.webp',
          alt: ''
        },
        title: 'User Flow',
        subtitle: 'Navigation Structure',
        paragraphs: [
          'The navigation structure of "Brush Along" is designed to be user-friendly and intuitive, ensuring easy access for both children and parents. Key sections include the brushing game for kids, a tracking dashboard for parents, reward management, and settings for customization. This structure promotes seamless interaction and efficient use of the app’s features.'
        ]
      },
      wireframes: {
        projectName: 'brushalong',
        specialClass: 'green-bg text-center',
        img: {
          src: 'assets/images/projects/brush-along/wireframes-image.webp',
          alt: ''
        },
        title: 'Sketch',
        subtitle: 'Wireframes',
        paragraphs: [
          'The wireframes for "Brush Along" provide a clear visual blueprint of the app\'s layout and functionality. They emphasize user-friendly design, intuitive navigation, and engaging elements to ensure both children and parents can easily interact with the app.'
        ]
      },
      styleGuide: {
        projectName: 'brushalong',
        specialClass: 'white-bg text-center',
        title: 'Visual Solution',
        subtitle: 'Style Guide',
        paragraphs: [
          'The style guide for "Brush Along" defines the visual and interactive elements, ensuring a cohesive and engaging user experience. It includes color schemes, typography, iconography, and design principles that reflect a fun, friendly, and accessible aesthetic for children and parents alike.'
        ],
        abc: 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz',
        items: [
          {
            text: {
              subtitle: 'Typography',
              paragraphs: [
                'The typography for "Brush Along" is playful yet readable, using child-friendly fonts for the game elements and clean, modern fonts for the parent dashboard. It ensures clarity, accessibility, and a consistent visual appeal across the app.'
              ],
            }
          },
          {
            font: {
              title: 'Little One',
              img: {
                src: 'assets/images/projects/brush-along/abc.svg',
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
                hex: '#FE7625'
              },
              {
                hex: '#FFF1D9'
              },
              {
                hex: '#FFCC01'
              },
              {
                hex: '#6E451E'
              },
              {
                hex: '#BE121E'
              },
              {
                hex: '#B0EE18'
              },
              {
                hex: '#6A8A45'
              },
              {
                hex: '#344224'
              },
              {
                hex: '#4B4D4F'
              }
            ]
          },
          {
            text: {
              subtitle: 'Components Library',
              paragraphs: [
                'The components library for "Brush Along" includes reusable UI elements such as buttons, icons, forms, and interactive widgets. These components ensure consistency, ease of development, and a cohesive user experience throughout the app.'
              ],
            }
          },
          {
            components: [
              {
                src: 'assets/images/projects/brush-along/component1.webp',
                alt: ''
              },
              {
                src: 'assets/images/projects/brush-along/component2.webp',
                alt: ''
              },
              {
                src: 'assets/images/projects/brush-along/component3.webp',
                alt: ''
              },
              {
                src: 'assets/images/projects/brush-along/component4.webp',
                alt: ''
              },
              {
                src: 'assets/images/projects/brush-along/component5.webp',
                alt: ''
              },
              {
                src: 'assets/images/projects/brush-along/component6.webp',
                alt: ''
              }
            ]
          }
        ]
      },
      finalDesign: {
        projectName: 'brushalong',
        specialClass: 'text-center green-bg',
        subtitle: 'Final Design',
        sections: [
          {
            classes: '',
            img: {
              src: 'assets/images/projects/brush-along/screens/welcome.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Welcome Screen',
            backgroundItem: 'green-circle-right',
            paragraphs: [
              'The first screen is vibrant and welcoming, designed to capture children\'s attention with colorful graphics and friendly characters. It features large, easy-to-understand icons and minimal text to ensure accessibility and ease of navigation for young users.'
            ]
          },
          {
            classes: 'reverse',
            img: {
              src: 'assets/images/projects/brush-along/screens/create-new.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Create New Profile',
            backgroundItem: 'green-circle-left',
            paragraphs: [
              'The process for creating a new profile is streamlined and intuitive. Users are guided step-by-step with clear instructions, engaging visuals, and user-friendly input fields, ensuring a smooth and enjoyable onboarding experience for both children and parents.'
            ]
          },
          {
            classes: '',
            img: {
              src: 'assets/images/projects/brush-along/screens/home.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Home Screen',
            backgroundItem: 'green-circle-right',
            paragraphs: [
              'The home screen is designed to be vibrant and engaging, featuring colorful graphics and friendly characters. It provides easy access to all main features through large, intuitive icons, ensuring a user-friendly experience for children.'
            ]
          },
          {
            classes: 'reverse',
            img: {
              src: 'assets/images/projects/brush-along/screens/brushing-time.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Brushing Time',
            backgroundItem: 'green-circle-left',
            paragraphs: [
              'During brushing time, the app features an engaging animation where the child\'s character brushes their teeth. After completing the brushing session, the child receives a gift. Upon opening the gift, they get an accessory for their character, which can be customized. Additionally, fun, interactive bubbles appear on the screen that the child can pop, adding an extra layer of enjoyment and interaction.'
            ]
          },
          {
            classes: '',
            img: {
              src: 'assets/images/projects/brush-along/screens/accessory.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Accessory Closet',
            backgroundItem: 'green-circle-right',
            paragraphs: [
              'The Accessory Closet screen allows the child to customize their character, which appears in the brushing animation. Here, they can add accessories earned from brushing sessions. The character, wearing the added accessories, is visible both in the brushing animation and on the home screen, providing a personalized and engaging experience for the child.'
            ]
          },
          {
            classes: 'reverse',
            img: {
              src: 'assets/images/projects/brush-along/screens/characters.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Characters Selection',
            backgroundItem: 'green-circle-left',
            paragraphs: [
              'The Character Selection screen allows the child to change and customize their character with accessories. The selected character appears in both the brushing session and on the home screen, wearing the same accessories the child has chosen. Characters are unlocked by maintaining brushing streaks: brushing for a certain number of consecutive days unlocks a new character, with additional characters unlocked for longer streaks. This encourages consistency and rewards good brushing habits.'
            ]
          },
          {
            classes: '',
            img: {
              src: 'assets/images/projects/brush-along/screens/parents.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Parents\' Screen',
            backgroundItem: 'green-circle-right',
            paragraphs: [
              'The parents\' screen provides options to customize the game settings, such as changing the sounds and adjusting the brushing time. To ensure that only parents can access these settings, they are required to answer a mathematical question before making any changes. This feature adds a layer of security while allowing parents to tailor the app to their child\'s needs.'
            ]
          },
          {
            classes: 'reverse',
            img: {
              src: 'assets/images/projects/brush-along/screens/edit-calander.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Edit Calendar',
            backgroundItem: 'green-circle-left',
            paragraphs: [
              'The Edit Calendar screen allows parents to view and manage their child\'s brushing progress. Parents can switch between profiles for different children and make adjustments to the brushing records. If a child forgot to log a brushing session or if they ran the animation without actually brushing, parents can update the calendar accordingly. This ensures accurate tracking and helps maintain consistent brushing habits.'
            ]
          }
        ]
      },
      prototypeConfig: {
        projectName: 'brushalong',
        specialClass: 'text-center white-bg',
        subtitle: 'Clickable Prototype',
        paragraphs: [
          'The clickable prototype of "Brush Along" allows for interactive testing of the app\'s features and navigation. It enables users to experience the flow of the app, including the brushing game, character customization, and parent settings. This prototype is essential for gathering feedback and making improvements to ensure a seamless and engaging user experience for both children and parents.'
        ],
        video: {
          ariaLabel: 'video of a prototype',
          poster: '',
          src:  '',
        }
      },
      conclusions: {
        projectName: 'brushalong',
        specialClass: 'clouds conclusions',
        title: 'Conclusions',
        subtitle: 'What did I Learn?',
        paragraphs: [
          'Working on "Brush Along" was a valuable experience that deepened my understanding of designing for diverse user groups. Creating an app that appeals to both children and parents required balancing fun and functionality. I learned how to develop engaging and intuitive interactions for young users, making the app enjoyable and easy to navigate with minimal text and more visual cues. For parents, I focused on incorporating robust tracking and customization options, ensuring they could easily monitor and support their children\'s brushing habits.',
          'This project highlighted the importance of positive reinforcement in motivating children and the need for consistent, user-friendly interactions to build healthy habits. I discovered the significance of combining creativity with usability, ultimately delivering an app that is both enjoyable and effective for families. Through this experience, I gained valuable insights into the challenges and rewards of creating an app that meets the needs of both children and parents.'
        ],
        image: {
          src: 'assets/images/projects/brush-along/dood.webp',
          alt: 'Tierro project logo'
        },
        dir: 'ltr'
      },
      footer: {
        projectName: 'brushalong',
        subtitle: 'Thanks For Watching!',
        image: {
          src: 'assets/images/projects/brush-along/crub.webp',
          alt: 'thanks'
        },
        paragraphsSide: [
          'Thank you for watching this presentation. I appreciate your time and attention, and I hope you enjoyed learning about "Brush Along." If you have any questions or feedback, please feel free to reach out. Thank you!'
        ],
      }
    }
  }
}

export interface BrushAlongProjectConfig {
  navbar: NavbarRegular;
  header: HeaderProjectConfig;
  overview: ProjectOverviewConfig;
  process: ProjectProcessConfig;
  problemSolution: ProjectProblemSolutionConfig;
  clientPage: ProjectMonoDynamicSectionConfig;
  adminPage: ProjectMonoDynamicSectionConfig;
  theGoal: ProjectSectionBulletsConfig;
  targetAudience: ProjectOverviewConfig;
  personas: ProjectPersonasConfig;
  userFlow: ProjectWireframesConfig;
  wireframes: ProjectWireframesConfig;
  insights: ProjectSectionBulletsConfig;
  styleGuide: ProjectStyleGuideConfig;
  finalDesign: ProjectSectionJumpConfig;
  prototypeConfig: ProjectPrototypeConfig;
  conclusions: ProjectMonoDynamicSectionConfig;
  footer: ProjectFinalSectionConfig;
}
