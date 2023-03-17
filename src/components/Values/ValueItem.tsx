import styled from "styled-components";
import { motion } from "framer-motion";
import { ValueType } from "data/values";
import { TitleH3, TextNormal } from "components/common/Typografy.styled";

type Props = {
  item: ValueType
};

const Item = styled(motion.li)`
  padding: 50px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 16px 24px -24px #000000, 0px 24px 48px -24px rgba(0, 0, 0, 0.8);
    img {
      filter: grayscale(0%);
    }
  }

  img {
    margin: 0 0 50px 0;
    filter: grayscale(100%);
  }
`;

export const ValueItem = ({ item }: Props) => {
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
      <img src={item.logo} alt={item.name} />
      <TitleH3>{item.name}</TitleH3>
      <TextNormal mB="0">{item.descr}</TextNormal>
    </Item>
  );
};