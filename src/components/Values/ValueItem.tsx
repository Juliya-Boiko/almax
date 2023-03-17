import styled from "styled-components";
import { ValueType } from "data/values";
import { TitleH3, TextNormal } from "components/common/Typografy.styled";

type Props = {
  item: ValueType
};

const Item = styled.li`
  padding: 50px;
  &:hover {
    box-shadow: 0px 16px 24px -24px #000000, 0px 24px 48px -24px rgba(0, 0, 0, 0.8);
    img {
      filter: grayscale(0%);
    }
  }

  img {
    margin: 0 0 50px 0;
    filter: grayscale(100%);
  }
`;

export const ValueItem = ({ item }: Props) => {
  return (
    <Item>
      <img src={item.logo} alt={item.name} />
      <TitleH3>{item.name}</TitleH3>
      <TextNormal mB="0">{item.descr}</TextNormal>
    </Item>
  );
};