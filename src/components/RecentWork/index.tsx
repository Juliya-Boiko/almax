import { TitleH4 } from "components/common/Typografy.styled";
import styled from "styled-components";
import { ArrayWorksType, WorkType } from "data/works";
import { RecentWorkItem } from "./RecentWorkItem";

type RecentWorkProps = {
  data: ArrayWorksType
};

const List = styled.ul`
  display: grid;
  grid-row-gap: 20px;
`;

export const RecentWork: React.FC<RecentWorkProps> = ({ data }) => {
 
  return (
    <div>
      <TitleH4>Recent Work</TitleH4>
      <List>
        {data.map((item: WorkType) => <RecentWorkItem key={item.id} item={item} />) }
      </List>
    </div>
  );
};