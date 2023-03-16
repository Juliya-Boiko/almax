import { useState } from "react";
import { projects, ArrayProjectsType, ProjectType } from "data/projects";
import { ProjectItem } from "./ProjectItem";
import styled from "styled-components";
import { SecondaryBtn } from "components/buttons/SecondaryBtn";
import { Section } from "components/Section";

const List = styled.ul`
  display: grid;
  grid-row-gap: 80px;
  margin: 0 0 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20 px;
  }
`;

export const Projects = () => {
  const [fullList, setFullList] = useState<boolean>(false);
  const croppedData: ArrayProjectsType = projects.slice(0, 2);
  const data: ArrayProjectsType = fullList ? projects : croppedData;

  return (
    <Section title="Our projects">
      <List>
        {data.map((item: ProjectType) => <ProjectItem key={item.id} item={item} />) }
      </List>
      <SecondaryBtn fullList={fullList} onClick={() => setFullList(prevState => !prevState)} />
    </Section>
  );
};