import { MemberType } from "data/team";
import styled from "styled-components";
import { TitleH3, TextMedium } from "components/common/Typografy.styled";

type Props = {
  item: MemberType
};

const Item = styled.li`
  text-align: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    text-align: start;
  }
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto 30px auto;
  border-radius: 50%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 30px 0;
  }
`; 

const Email = styled.a`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 2;
  color: ${p => p.theme.colors.blue};
`;

export const ContactItem = ({ item }: Props) => {
  return (
    <Item>
      <Image src={item.avatar} alt={item.name} />
      <TitleH3>{item.name}</TitleH3>
      <Email>{item.email}</Email>
      <TextMedium mB="0">{item.option}</TextMedium>
    </Item>
  );
};