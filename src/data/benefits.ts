import imgUrl1Mob from '../assets/benefits/1-mob.png';
import imgUrl1Desk from '../assets/benefits/1-dt.png';
import imgUrl2 from '../assets/benefits/2.png';
import imgUrl3 from '../assets/benefits/3.png';
import imgUrl4 from '../assets/benefits/4.png';

export type BenefitType = {
  id: number,
  title: string,
  benefit: string,
  imgMobile: string,
  imgDesktop: string,
}

export type ArrayBenefitsType = BenefitType[];

export const benefits: ArrayBenefitsType = [
  {
    id: 0,
    title: 'Increase your conversion rates',
    benefit: 'A well though out and tested UX can take your product a long way. No more users dropping off in 7 seconds because of frustration. No more need to lie about how your app “worked just fine before I showed it to you”',
    imgMobile: imgUrl1Mob,
    imgDesktop: imgUrl1Desk
  },
  {
    id: 1,
    title: 'Make your product look modern and up to date',
    benefit: 'Trends come and go — but your design should always stay looking fresh! Let us create a trustworthy up to date design for your digital product',
    imgMobile: imgUrl2,
    imgDesktop: imgUrl2
  },
  {
    id: 2,
    title: 'Make your product look modern and up to date',
    benefit: 'Trends come and go — but your design should always stay looking fresh! Let us create a trustworthy up to date design for your digital product',
    imgMobile: imgUrl3,
    imgDesktop: imgUrl3
  },
  {
    id: 3,
    title: 'Make your product look modern and up to date',
    benefit: 'Trends come and go — but your design should always stay looking fresh! Let us create a trustworthy up to date design for your digital product',
    imgMobile: imgUrl4,
    imgDesktop: imgUrl4
  },
];