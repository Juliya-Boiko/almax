import { Section } from "components/Section";
import { useState } from "react";
import { SelectGroup } from "components/Select/SelectGroup";
import { SelectList } from "components/Select/SelectList";
import { team } from "data/team";
import { TeamInfo } from "./TeamInfo";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-row-gap: 50px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 200px;
    grid-row-gap: 0px;
  }
`;

export const Team = () => {
  const [selected, setSelected] = useState<number>(0);

  const selectHandler = (id: number) => {
    setSelected(id);
  }

  const nextHandler = () => {
    setSelected(prevState => {
      return prevState === 3 ? 0 : prevState + 1;
    });
  };

  return (
    <Section title="Our team">
      <Content>
        <SelectGroup data={team} selected={selected} selectHandler={selectHandler} />
        <SelectList data={team} selected={selected} selectHandler={selectHandler} />
        <TeamInfo selected={selected} nextHandler={nextHandler} />
      </Content>
    </Section>
  );
};