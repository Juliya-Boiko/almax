import styled from "styled-components";
import { TextNormal } from "components/common/Typografy.styled";

const OfferBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 80px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
   grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
  }
`;

export const Offer = () => {
  return (
    <OfferBlock>
      <div>
        <p>Let us boost your </p>
        <p>— sales</p>
        <p>— image</p>
        <p>— user experience</p>
      </div>

      <TextNormal mB="0" >ALMAX is a strategically driven, digital-first agency that lives at the intersection of creativity and technology. We solve consumer and business problems with end-to-end solutions that flex to meet the needs of today’s ever-changing digital landscape.</TextNormal>
      
    </OfferBlock>
  );
};