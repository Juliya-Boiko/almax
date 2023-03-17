import styled from "styled-components";
import { motion } from "framer-motion";
import defaultBgi from '../../assets/works/default-bgi.png';
import { WorkType } from "data/works";
import { TitleH4, TextMedium } from "components/common/Typografy.styled";

type Props = {
  item: WorkType
};

const Item = styled(motion.li)`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 30px;
`;

const Image = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-image: url(${defaultBgi});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecentWorkItem = ({ item }: Props) => {
  return (
    <Item
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: item.id / 10, duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Image>
        <img src={item.logo} alt="Logo" />
      </Image>  
      <div>
        <TitleH4>{item.name}</TitleH4>
        <TextMedium mB="0">{item.descr}</TextMedium>
      </div>
    </Item>
  );
};