import styled from "styled-components";

type Props = {
  name: string,
  placeholder: string,
  rows: number
};

const CustomTextarea = styled.textarea`
  resize: none;
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

export const Textarea = ({ placeholder, name, rows }: Props) => {
  return (
    <CustomTextarea style={{ resize: 'none' }} name={name} id={name} placeholder={placeholder} rows={rows} />
  );
};