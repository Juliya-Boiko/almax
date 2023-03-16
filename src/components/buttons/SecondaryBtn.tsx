import { IoMdArrowForward, IoMdArrowUp } from "react-icons/io";
import styled from "styled-components";

type ButtonProps = {
  fullList: boolean,
  onClick: () => void
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  margin: 0 auto;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 14px;
  line-height: 1.7;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.black};
  background-color: transparent;
  cursor: pointer;
  &:hover {
   // box-shadow: 0px 16px 64px -16px rgba(0, 0, 0, 0.6);
  }

  svg {
    margin: 0 0 0 10px;
  }
`;

export const SecondaryBtn: React.FC<ButtonProps> = ({ fullList, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {fullList ? 'Hide' : 'See all projects'}
      {fullList ? <IoMdArrowUp size="24" /> : <IoMdArrowForward size="24" />}
    </Button>
  );
}; 