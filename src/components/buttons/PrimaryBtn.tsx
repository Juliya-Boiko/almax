import styled from "styled-components";
import { IoMdArrowForward } from "react-icons/io";
import { RiSendPlane2Fill } from "react-icons/ri";

type Props = {
  type: 'button' | 'submit',
  title: string,
  width?: string,
  onClick?: (e: any) => void
};

type StyleTypes = {
  width?: string
}

const Button = styled.button<StyleTypes>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 14px;
  line-height: 1.7;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.black};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 16px 64px -16px rgba(0, 0, 0, 0.6);
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.width};
  }
  svg {
    margin: 0 0 0 10px;
  }
`;

export const PrimaryBtn = ({ type, title, width, onClick }: Props) => {
  return (
    <Button type={type} width={width} onClick={onClick}>
      {title}
      { type === 'button' ? <IoMdArrowForward size="24" /> : <RiSendPlane2Fill size="24" /> }
    </Button>
  );
};

