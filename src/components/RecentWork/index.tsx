import styled from "styled-components";
import { TitleH4 } from "components/common/Typografy.styled";
import { ArrayWorksType, WorkType } from "data/works";
import { RecentWorkItem } from "./RecentWorkItem";

type Props = {
  data: ArrayWorksType
};

const List = styled.ul`
  display: grid;
  grid-row-gap: 20px;
`;

export const RecentWork = ({ data }: Props) => {
 
  return (
    <div>
      <TitleH4>Recent Work</TitleH4>
      <List>
        {data.map((item: WorkType) => <RecentWorkItem key={item.id} item={item} />) }
      </List>
    </div>
  );
};