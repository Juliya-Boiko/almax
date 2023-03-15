import { BenefitItem } from "./BenefitItem";
import imgUrl1Mob from '../assets/benefits/1-mob.png';
import imgUrl1Desk from '../assets/benefits/1-dt.png';
import imgUrl2 from '../assets/benefits/2.png';
import imgUrl3 from '../assets/benefits/3.png';
import imgUrl4 from '../assets/benefits/4.png';
import styled from "styled-components";

const benefits = [
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

const List = styled.ul`
  display: grid;
  grid-template-rows: 840px repeat(3, 390px);
  grid-template-columns: 1fr;
  grid-row-gap: 80px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: grid;
    grid-template-rows: 420px 420px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    li:first-child {
      grid-area: 1 / 1 / 3 / 2;
    }
    li:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3; 
    }
    li:nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
    }
    li:last-child {
      grid-area: 2 / 3 / 3 / 4;
    }
  }
`;

export const BenefitsList = () => {
  return (
    <List>
      {benefits.map(benefit => <BenefitItem key={benefit.id} item={benefit} />)}
    </List>
  );
};