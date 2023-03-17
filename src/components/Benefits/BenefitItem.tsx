import styled from "styled-components";
import { motion } from "framer-motion";
import { BenefitType } from "../../data/benefits";
import { TitleH3, TextNormal } from "components/common/Typografy.styled";

type Props = {
  item: BenefitType
};

type ImageStyleProps = {
  mobile: string,
  desktop: string
};

const Item = styled(motion.li)`
  display: flex;
  flex-direction: column;
  &:hover {
    div {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
    <Item
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.1, duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Image mobile={item.imgMobile} desktop={item.imgDesktop} />
      <TitleH3>{item.title}</TitleH3>
      <TextNormal mB="0">{item.benefit}</TextNormal>
    </Item>
  );
};