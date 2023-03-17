import { Section } from "components/Section";
import { useState } from "react";
import styled from "styled-components";
import { services } from "../../data/services";
import { SelectGroup } from "./SelectGroup";
import { SelectList } from "./SelectList";
import { ServiceInfo } from "./ServiceInfo";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";
import { works } from "../../data/works";
import { RecentWork } from "components/RecentWork";

const Content = styled.div`
  display: grid;
  grid-row-gap: 50px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 200px 420px auto 420px;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
  }
`; 

const Image = styled.img`
  display: block;
  width: 100%;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 632px;
  }
`;

const RecentServices = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  button {
    margin: 0 0 80px 0;
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      margin: 0;
    }
  }
`;

export const Services:React.FC  = () => {
  const [selected, setSelected] = useState<number>(0);
  const item = services[selected];
  const filtered = works.filter(work => work.type.includes(item.option))

  const selectHandler = (id: number) => {
    setSelected(id);
  }

  return (
    <Section title="Our services">
      <Content>
        <SelectGroup selected={selected} selectHandler={selectHandler} />
        <SelectList selected={selected} selectHandler={selectHandler} />
        <ServiceInfo selected={selected} />
        <Image src={item.img} alt={item.option} />
        <RecentServices>
          <PrimaryBtn type="button" title="Order service now" />
          <RecentWork data={filtered} />
        </RecentServices>
      </Content>
    </Section>
  );
};