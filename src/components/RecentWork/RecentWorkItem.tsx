import styled from "styled-components";
import { WorkType } from "data/works";
import defaultBgi from '../../assets/works/default-bgi.png';
import { TitleH4, TextMedium } from "components/common/Typografy.styled";

type RecentWorkItemProps = {
  item: WorkType
};

const Item = styled.li`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 30px;
`;

const Image = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-image: url(${defaultBgi});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecentWorkItem: React.FC<RecentWorkItemProps> = ({ item }) => {
  return (
    <Item>
      <Image>
        <img src={item.logo} alt="Logo" />
      </Image>  
      <div>
        <TitleH4>{item.name}</TitleH4>
        <TextMedium mB="0">{item.descr}</TextMedium>
      </div>
    </Item>
  );
};