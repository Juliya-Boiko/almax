import { BenefitItem } from "./BenefitItem";
import styled from "styled-components";
import { benefits, BenefitType } from "../../data/benefits";

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
      {benefits.map((benefit: BenefitType) => <BenefitItem key={benefit.id} item={benefit} />)}
    </List>
  );
};