import luxuryLogo from '../assets/works/luxurylist.svg';
import namierLogo from '../assets/works/namier.svg';
import zentacleLogo from '../assets/works/zentacle.svg';
import vibecoinLogo from '../assets/works/vibecoin.svg';
import arrivalsLogo from '../assets/works/arrivals.svg';

export type WorkType = {
  id: number,
  name: string,
  descr: string,
  type: String[],
  logo: string,
  date: string
};

export type ArrayWorksType = WorkType[];

export const works: ArrayWorksType = [
  {
    id: 0,
    name: 'Luxylist',
    descr: 'Website — Fans & Followers Wishlist Platform',
    type: ['Website', 'Logo and brand', 'UX / UI audit', 'Landing page'],
    logo: luxuryLogo,
    date: '01-01-2022'
  },
  {
    id: 1,
    name: 'Namier',
    descr: 'Advisory Firm Website Design',
    type: ['Website', 'Icon'],
    logo: namierLogo,
    date: '05-05-2022'
  },
  {
    id: 2,
    name: 'Zentacle',
    descr: 'Scuba Diving Log Mobile App',
    type: ['Mobile app', 'Mind-map & CGM', 'UX / UI audit',],
    logo: zentacleLogo,
    date: '31-12-2022'
  },
  {
    id: 3,
    name: 'Vibecoin',
    descr: 'Blockchain-Enabled Commerce App',
    type: ['Mobile app', 'Web app', 'Prototyping', 'E-commerce'],
    logo: vibecoinLogo,
    date: '02-02-2023'
  },
  {
    id: 4,
    name: 'Arrivals',
    descr: 'Taxi Mobile App',
    type: ['Mobile app', 'User flow creation', 'Style & color guideline'],
    logo: arrivalsLogo,
    date: '03-03-2023'
  },
];