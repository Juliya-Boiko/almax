import { TitleH4, TextNormal } from "components/common/Typografy.styled";
import { ProjectType } from "data/projects";
import styled from "styled-components";

type Props = {
  item: ProjectType
};

const Item = styled.li`
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`;

const Image = styled.img`
    width: 100%;
    height: 177px;
    margin: 0 0 20px 0;
    filter: grayscale(100%);
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      height: 354px;
    }
`;

export const ProjectItem = ({ item }: Props) => {
  return (
    <Item>
      <Image src={item.img} alt={item.title} />
      <TitleH4>{item.title}</TitleH4>
      <TextNormal mB="0">{item.descr}</TextNormal>
    </Item>
  );
};