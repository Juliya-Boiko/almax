import { Section } from "components/Section";
import { Form } from "./Form";
import { team, MemberType } from "data/team";
import { ContactItem } from "./ContactItem";
import styled from "styled-components";
import { Offer } from "./Offer";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 80px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: 630px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 230px;
    grid-row-gap: 0px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 25px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
  }
`;

const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 80px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-row-gap: 170px;
  }
`;

export const Contacts = () => {
  return (
    <Section title="Get in touch">
      <Content>
        <Form />
        <InfoBlock>
          <List>{team.map((item: MemberType) => <ContactItem key={item.id} item={item} />)}</List>
          <Offer />
        </InfoBlock>
      </Content>
    </Section>
  );
};