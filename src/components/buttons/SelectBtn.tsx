import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

type ButtonTypes = {
  title: string,
  onClick: () => void
};

type StyleTypes = {
  //width?: string
}

const Button = styled.button<StyleTypes>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 12px;
  line-height: 2.3;
  border: none;
  outline: none;
  border-left: 4px solid black;
  background-color: transparent;
  cursor: pointer;

`;

export const SelectBtn:React.FC<ButtonTypes> = ({ title, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>{title} <IoIosArrowDown size="28" /></Button>
  );
}


  /* 
 
  &:hover {
    box-shadow: 0px 16px 64px -16px rgba(0, 0, 0, 0.6);
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.width};
  }
  svg {
    margin: 0 0 0 10px;
  } */