import Travelers from '../../images/travelers.svg';
import Unique from '../../images/unique.svg';
import Alone from '../../images/moment_to_remember.svg';
import Booking from '../../images/date_picker.svg';
import Online from '../../images/online.svg';
import Subway from '../../images/subway.svg';

export const heroInfo = {
  primarybg: true,
  darkfont: false,
  fontbig: true,
  bigpadding: true,
  hoverprimarybg: false,
  hoverdarkfont: true,
};

export const introductionInfo = {
  objectOne: {
    id: 'about',
    lightbg: false,
    darktexth: false,
    darktextp: false,
    topLine: 'Travel in your own pace',
    heading: 'Everyone has their own vacation needs',
    subtitle:
      "Wander in Japan crafts and customizes vacations to Japan and for almost every type of wanderer. From adventurous, independent tours to welcoming group trips, we'll build the best vacation for you.",
    buttonLabel: 'Contact Us',
    imgstart: true,
    img: Unique,
    alt: 'travellers',
    primarybg: true,
    darkfont: true,
    hoverprimarybg: true,
    hoverdarkfont: false,
    spy: true,
  },
  objectTwo: {
    id: 'currenttours',
    lightbg: true,
    darktexth: true,
    darktextp: true,
    topLine: 'Premium Guided Tours',
    heading: 'Enjoy yourself without any hassle',
    subtitle:
      "Join our guided tours to experience the local culture without the culture shock. Don't worry, Japanese is not needed, we will help you out!",
    buttonLabel: 'Current tours',
    imgstart: false,
    img: Travelers,
    alt: 'travellers',
    primarybg: true,
    darkfont: true,
    hoverprimarybg: true,
    hoverdarkfont: false,
    spy: true,
  },
  objectThree: {
    id: 'travelalone',
    lightbg: false,
    darktexth: false,
    darktextp: false,
    topLine: 'Expert Insight & Travel Knowledge',
    heading: 'Travel has become complicated',
    subtitle:
      'Our expert consultants know where you can travel and use their wealth of knowledge to help you make the best decisions for your trip.',
    buttonLabel: 'Talk to an Expert',
    imgstart: true,
    img: Alone,
    alt: 'travellers',
    primarybg: true,
    darkfont: true,
    hoverprimarybg: true,
    hoverdarkfont: false,
    spy: true,
  },
};

export const servicesInfo = {
  serviceOne: {
    icon: Booking,
    title: 'Booking made easy',
    paragraph: 'We will book all you need from flights to entrance tickets',
  },
  serviceTwo: {
    icon: Online,
    title: 'Virtual office to the rescue!',
    paragraph: 'All the paperwork can be done everywhere on online',
  },
  serviceThree: {
    icon: Subway,
    title: 'Public transport untangled',
    paragraph: 'We will guide you through all the possibilities',
  },
};
