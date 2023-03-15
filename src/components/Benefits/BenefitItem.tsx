import { theme } from "styles/theme";
import { Text } from "components/common/Typografy.styled";
import styled from "styled-components";

type BenefitTypes = {
  item: {
    id: number,
    benefit: string,
    imgMobile: string,
    imgDesktop: string
    title: string
  }
};

type StyleTypes = {
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

const Image = styled.div<StyleTypes>`
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

export const BenefitItem: React.FC<BenefitTypes> = ({ item }) => {
  return (
    <Item>
      <Image mobile={item.imgMobile} desktop={item.imgDesktop} />
      <Text mB="30px" fW={theme.fontWeight.extra} fS="20px" lH="1.4">{item.title}</Text>
      <Text mB="0" fW={theme.fontWeight.normal} fS="14px" lH="1.7" color={theme.colors.gray3}>{item.benefit}</Text>
    </Item>
  );
};