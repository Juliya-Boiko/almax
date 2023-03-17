import styled from "styled-components";

type Props = {
  type: string,
  name: string,
  placeholder: string,
};

export const CustomInput = styled.input`
  width: 100%;
  margin: 0 0 20px 0;
  padding: 10px;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 14px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.black};
  background-color: transparent;
  &::placeholder {
    color: ${p => p.theme.colors.gray3};
  }
`;

export const Input = ({ type, name, placeholder }: Props) => {
  return (
    <CustomInput type={type} name={name} id={name} placeholder={placeholder} />
  );
};