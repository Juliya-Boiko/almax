import styled from "styled-components";
import { motion } from "framer-motion";
import { MemberType } from "data/team";
import { TitleH3, TextMedium } from "components/common/Typografy.styled";

type Props = {
  item: MemberType
};

const Item = styled(motion.li)`
  text-align: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    text-align: start;
  }
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto 30px auto;
  border-radius: 50%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 30px 0;
  }
`; 

const Email = styled.a`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 2;
  color: ${p => p.theme.colors.blue};
`;

export const ContactItem = ({ item }: Props) => {
  return (
    <Item
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: item.id / 10, duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Image src={item.avatar} alt={item.name} />
      <TitleH3>{item.name}</TitleH3>
      <Email>{item.email}</Email>
      <TextMedium mB="0">{item.option}</TextMedium>
    </Item>
  );
};