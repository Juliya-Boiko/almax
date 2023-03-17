import styled from "styled-components";
import { motion } from "framer-motion";
import { MemberType } from "data/team";
import { ServiceType } from "data/services";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  data: Array<ServiceType | MemberType>
  selected: number,
  selectHandler: (e: number) => void
};

type ItemStyleProps = {
  bordered: boolean
}

const List = styled(motion.ul)`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: block;
  }
`;

const Item = styled.li<ItemStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 12px;
  line-height: 2.3;
  border-left: ${ p => p.bordered ? '4px solid black' : 'none' };
  svg {
    display: ${ p => p.bordered ? 'block' : 'none' };
  }
`;

export const SelectList = ({ data, selected, selectHandler }: Props) => {
  const bordered = (id: number) => {
    return id === selected ? true : false;
  };

  return (
    <List
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {data.map((item) => {
        return <Item
          key={item.id}
          bordered={bordered(item.id)}
          onClick={() => selectHandler(item.id)}
        >
          {item.option}
           <IoIosArrowForward size="20" />
      </Item> }) }
    </List>
  );
};