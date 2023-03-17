import { MemberType } from "data/team";
import { ServiceType } from "../../data/services";
import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  data: Array<ServiceType | MemberType>
  selected: number
  selectHandler: (e: number) => void
}

const Content = styled.div`
  position: relative;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 12px;
  line-height: 2.3;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  }
`;

const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-left: 4px solid black;
  cursor: pointer;
`;

const List = styled.ul`
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: ${p => p.theme.colors.gray6};
  
  li {
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      border-left: 4px solid black;
    }
  }
`;

export const SelectGroup = ({ data, selected, selectHandler }: Props) => {
  const [showOpts, setShowOpts] = useState<Boolean>(false);

  return (
    <Content>
      <SelectedOption onClick={() => setShowOpts(prevState => !prevState)} >
        {data[selected].option}
        <IoIosArrowDown size="28" />
      </SelectedOption>
      {showOpts
        ? <List>{data.map((item) => {
          return <li
            key={item.id}
            onClick={() => {
              selectHandler(item.id);
              setShowOpts(false);
            }}
          >
            {item.option}
          </li>
        })}</List>
        : null
      }
    </Content>
  );
};





