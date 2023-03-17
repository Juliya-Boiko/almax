import styled from "styled-components";
import { motion } from "framer-motion";
import { ProjectType } from "data/projects";
import { TitleH4, TextNormal } from "components/common/Typografy.styled";

type Props = {
  item: ProjectType
};

const Item = styled(motion.li)`
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`;

const Image = styled.img`
    width: 100%;
    height: 177px;
    margin: 0 0 20px 0;
    filter: grayscale(100%);
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      height: 354px;
    }
`;

export const ProjectItem = ({ item }: Props) => {
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
      <Image src={item.img} alt={item.title} />
      <TitleH4>{item.title}</TitleH4>
      <TextNormal mB="0">{item.descr}</TextNormal>
    </Item>
  );
};