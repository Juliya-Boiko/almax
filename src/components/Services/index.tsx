import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { services, ServiceType } from "../../data/services";
import { works, ArrayWorksType, WorkType } from "../../data/works";
import { Section } from "components/Section";
import { SelectGroup } from "components/Select/SelectGroup";
import { SelectList } from "components/Select/SelectList";
import { ServiceInfo } from "./ServiceInfo";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";
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

const Image = styled(motion.img)`
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

export const Services = () => {
  const [selected, setSelected] = useState<number>(0);
  const item: ServiceType = services[selected];
  const filtered: ArrayWorksType = works.filter((work: WorkType) => work.type.includes(item.option));

  const selectHandler = (id: number): void => {
    setSelected(id);
  }

  return (
    <Section title="Our services">
      <Content>
        <SelectGroup data={services} selected={selected} selectHandler={selectHandler} />
        <SelectList data={services} selected={selected} selectHandler={selectHandler} />
        <ServiceInfo selected={selected} />
        <Image src={item.img} alt={item.option}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        />
        <RecentServices>
          <PrimaryBtn type="button" title="Order service now" onClick={() => { window.location.href = "#contact" }} />
          <RecentWork data={filtered} />
        </RecentServices>
      </Content>
    </Section>
  );
};