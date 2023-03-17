import { Primary } from "./Primary";
import { Description } from "./Description";
import styled from "styled-components";
import { Wrapper } from "components/common/Wrapper.styled";
import { Container } from "components/common/Container.styled";
import { RecentWork } from "components/RecentWork";
import { works } from "data/works";

const Content = styled.div`
  display: grid;
  grid-row-gap: 60px;
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: 14px;
  line-height: 1.7;
  color: ${p => p.theme.colors.gray2};

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 520px 1fr;
    grid-column-gap: 120px;
    grid-row-gap: 200px;
    div:first-child {
      grid-area: 1 / 1 / 2 / 2;
    }
    div:nth-child(2) {
     grid-area: 1 / 2 / 3 / 3;
    }
    div:nth-child(3) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
`;

export const Hero = () => {
   const data = works.slice(0, 3);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Primary />
          <Description />
          <RecentWork data={data} />
        </Content>
      </Container>
    </Wrapper>
  );
};