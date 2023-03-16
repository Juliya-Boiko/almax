import projectImg2 from '../assets/projects/project-2.png';
import projectImg1 from '../assets/projects/project-1.png';

export type ProjectType = {
  id: number,
  title: string,
  descr: string,
  img: string,
}

export type ArrayProjectsType = ProjectType[];

export const projects: ArrayProjectsType = [
  {
    id: 0,
    title: 'LuxyList Website — Fans & Followers Wishlist Platform',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: projectImg1
  },
  {
    id: 1,
    title: 'Zentacle — Scuba Diving Log Mobile App',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: projectImg2
  },
  {
    id: 2,
    title: 'Wound Trek — Admin Medical Web & Mobile Application',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: projectImg1
  },
  {
    id: 3,
    title: 'Black American History Organisation Website',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: projectImg2
  },
  {
    id: 4,
    title: 'Arrivals — Taxi Mobile App',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: projectImg1
  },
  {
    id: 5,
    title: 'Letter - Social Mobile App',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: projectImg2
  },
];