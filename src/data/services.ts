import imgDefault1 from '../assets/services/services-default.png';
import imgDefault2 from '../assets/services/services-default-2.png';

export type ServiceType = {
  id: number,
  option: string,
  title: string,
  description: string,
  img: string
};

export type ArrayServicesType = ServiceType[];

export const services: ArrayServicesType = [
  {
    id: 0,
    option: 'Mobile app',
    title: 'Mobile app design',
    description: "We can create a custom mobile app design for your business in order give your clients the best user experience possible as well as eye-pleasing visuals.",
    img: imgDefault1
  },
  {
    id: 1,
    option: 'Web app',
    title: 'Web app design',
    description: "We can create a custom web app design for your business in order give your clients the best user experience possible as well as eye-pleasing visuals.",
    img: imgDefault2
  },
  {
    id: 2,
    option: 'Website',
    title: 'Website design',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault1
  },
  {
    id: 3,
    option: 'Logo and brand',
    title: 'Logo and brand design',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault2
  },
  {
    id: 4,
    option: 'E-commerce',
    title: 'E-commerce',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault1
  },
  {
    id: 5,
    option: 'UX / UI audit',
    title: 'UX / UI audit',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault2
  },
  {
    id: 6,
    option: 'User flow creation',
    title: 'User flow creation',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault1
  },
  {
    id: 7,
    option: 'Style & color guideline',
    title: 'Style & color guideline',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault2
  },
  {
    id: 8,
    option: 'Landing page',
    title: 'Landing page design',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault1
  },
  {
    id: 9,
    option: 'Icon',
    title: 'Icon design',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault2
  },
  {
    id: 10,
    option: 'Mind-map & CGM',
    title: 'Mind-map & CGM',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault1
  },
  {
    id: 11,
    option: 'Prototyping',
    title: 'Prototyping design',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: imgDefault2
  },
];