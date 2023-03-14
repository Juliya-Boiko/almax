import { Primary } from "./Primary";
import { Description } from "./Description";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
    padding: 60px 100px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Hero:React.FC = () => {
  return (
    <Content>
      <Primary />
      <Description />
    </Content>
  );
};