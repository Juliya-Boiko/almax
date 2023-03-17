import styled from "styled-components";

type Props = {
  children: JSX.Element,
  onClick: () => void
};

const Button = styled.button`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const IconBtn = ({ children, onClick }: Props) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};