import { Injectable } from '@angular/core';
import { Cta, Img } from '@core/index';

@Injectable({
  providedIn: 'root'
})
export class ManagementConfigService {

  managements(): management {
    return {
      tierro: {
        logo: {
          src: 'assets/images/projects/tierro/logo-color.svg',
          alt: 'Tierro project logo'
        },
        title: 'Background',
        subtitle: 'Innovative Webpage for a Music Producer',
        paragraphs: [
          'Tierro, a music producer, was looking for a digital platform that truly captured their musical creativity. I crafted a visually engaging webpage that brings Tierro’s artistic vision to life. To make the experience even more immersive, I developed a custom music player tailored to their unique sound. This project not only highlights Tierro’s work but also strengthens their connection with their audience online.'
        ],
        industry: 'Music',
        platform: 'Web',
        role: 'UI / UX Designer / Developer',
        imgHero: {
          src: 'assets/images/projects/tierro/crm/crm_header.webp',
          alt:  'Tierro CRM project screens on mobile,tablet and desktop'
        },
        rows: [
          {
            classes: '',
            img: {
              src: 'assets/images/projects/tierro/crm/crm_login_screen.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_songs_screen.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_add_song_edit_song_screen.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_reviews_screen.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_add_review_edit_review.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_settings_screen.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_edit_personal_profile_screen.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_edit_user_details_screen.webp',
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
              src: 'assets/images/projects/tierro/crm/crm_edit_payment_methods_screen.webp',
              alt: 'Laptop with login screen of the admin page for tierro'
            },
            title: 'Edit Payment Methods',
            backgroundItem: 'yellow-circle-right',
            paragraphs: [
              'The Edit Payment Methods screen allows the music producer to manage his financial details. The inputs for this screen include card type, cardholder name, expiration date, CVV, and card number. This ensures that his payment information is always current and secure.'
            ]
          },
        ],
        moreFrom: [
          {
            text: 'See Newsletter Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to newsletter design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'mail',
            inLink: 'projects/design/emails-banners/tierro',
            target: '_blank'
          },
          {
            text: 'See Logo Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to logo design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'diamond',
            inLink: 'projects/design/logos-marketing/tierro',
            target: '_blank'
          },
          {
            text: 'See Website Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to website design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'ui',
            inLink: 'projects/design/website-lps/tierro',
            target: '_blank'
          },
          {
            text: 'UX Case Study',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to UX case study',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'science',
            inLink: 'projects/ux/tierro',
            target: '_blank'
          },
        ]
      }
    }
  }

  getManagements(title: string): managementConfig | undefined {
    const emailsBanners = this.managements();
    return emailsBanners[title];
  }

  createCtaForNextProject(currentTitle: string): Cta | undefined {
    const websiteLps = this.managements();
    const titles = Object.keys(websiteLps);
  
    const index = titles.indexOf(currentTitle);
    if (index === -1) {
      // Current title not found
      return undefined;
    }
  
    const nextIndex = (index + 1) % titles.length;
    const nextTitle = titles[nextIndex];
  
    const ctaConfig: Cta = {
      text: 'Next Project',
      size: 'regular',
      color: 'yellow',
      ariaLabel: 'Go to next management project',
      showIconLeft: false,
      showIconRight: true,
      iconRight: 'east_arrow',
      inLink: `projects/design/management/${nextTitle}`,
    };
  
    return ctaConfig;
  }
}

export interface managementConfig {
  logo: Img;
  title: string;
  subtitle: string;
  paragraphs: string[];
  liveWebsite?: Cta;
  imgHero: Img;
  rows: {
    classes?: string;
    backgroundItem?: string;
    img: Img;
    title: string;
    paragraphs: string[];
  } [];
  industry: string;
  platform: string;
  role: string;
  moreFrom?: Cta[];
}

export interface management {
  [title: string]: managementConfig;
}
