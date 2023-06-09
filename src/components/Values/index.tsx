import styled from "styled-components";
import { values, ValueType } from "data/values";
import { Section } from "components/Section";
import { TextNormal } from "components/common/Typografy.styled";
import { ValueItem } from "./ValueItem";

const Content = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 0px;
    align-items: end;
  }
`;

const List = styled.ul`
  display: grid;
  grid-row-gap: 30px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 415px);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
  }
`;

export const Values = () => {
  return (
    <Section title="Our values">
      <Content>
        <TextNormal mB="80px">As ALMAX we base our work on these three values / principals:</TextNormal>
        <List>
          { values.map((item: ValueType) => <ValueItem key={item.id} item={item} />) }
        </List>
      </Content>
    </Section>
  );
};