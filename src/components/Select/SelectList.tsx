
import { MemberType } from "data/team";
import { ServiceType } from "data/services";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

type Props = {
  data: Array<ServiceType | MemberType>
  selected: number,
  selectHandler: (e: number) => void
};

type ItemStyleProps = {
  bordered: boolean
}

const List = styled.ul`
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
    <List>
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