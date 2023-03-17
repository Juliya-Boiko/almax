import memberAv1 from '../assets/team/team-1.png';
import memberAv2 from '../assets/team/team-2.png';

export type MemberType = {
  id: number,
  name: string,
  option: string,
  descr: string,
  email: string,
  avatar: string
};

export type ArrayMembersType = MemberType[];

export const team: ArrayMembersType = [
  {
    id: 0,
    name: 'Max D.',
    option: 'Chief Executive Officer',
    descr: 'One of the Founders of ALMAX who built his career by go through every position available at design agencies. This way Max understood the insides of how to run a business properly. ',
    email: 'js@almax.com',
    avatar: memberAv1
  },
  {
    id: 1,
    name: 'Alex K. ',
    option: 'Management',
    descr: 'Management ALMAX who built his career by go through every position available at design agencies. This way Max understood the insides of how to run a business properly. ',
    email: 'js@almax.com',
    avatar: memberAv2
  },
  {
    id: 2,
    name: 'John L.',
    option: 'Designers',
    descr: 'One of Designers of ALMAX who built his career by go through every position available at design agencies. This way Max understood the insides of how to run a business properly. ',
    email: 'js@almax.com',
    avatar: memberAv1
  },
  {
    id: 3,
    name: 'Mark B. ',
    option: 'Sales',
    descr: 'Sales manager ALMAX who built his career by go through every position available at design agencies. This way Max understood the insides of how to run a business properly. ',
    email: 'js@almax.com',
    avatar: memberAv2
  },
];