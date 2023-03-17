import styled from "styled-components";
import { BenefitType } from "../../data/benefits";
import { TitleH3, TextNormal } from "components/common/Typografy.styled";

type Props = {
  item: BenefitType
};

type ImageStyleProps = {
  mobile: string,
  desktop: string
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  &:hover {
    div {
      filter: grayscale(0%);
      box-shadow: 0px 16px 24px -24px #000000, 0px 24px 48px -24px rgba(0, 0, 0, 0.8);
    }
  }
`;

const Image = styled.div<ImageStyleProps>`
  width: 100%;
  filter: grayscale(100%);
  flex-grow: 1;
  margin: 0 0 30px 0;
  background-image: url(${p => p.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    background-image: url(${p => p.desktop});
  }
`;

export const BenefitItem = ({ item }: Props) => {
  return (
    <Item>
      <Image mobile={item.imgMobile} desktop={item.imgDesktop} />
      <TitleH3>{item.title}</TitleH3>
      <TextNormal mB="0">{item.benefit}</TextNormal>
    </Item>
  );
};