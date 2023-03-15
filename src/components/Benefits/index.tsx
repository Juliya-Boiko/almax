import styled from "styled-components";
import { Container } from "components/common/Container.styled";
import { TitleH2 } from "components/common/Typografy.styled";
import { BenefitsList } from "./BenefitsList";

const Content = styled.div`
  padding: 150px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 300px 0;
  }
`;

export const Benefits:React.FC = () => {
  return (
    <Content>
      <Container>
        <TitleH2>How we add value to your business</TitleH2>
        <BenefitsList />
      </Container>
    </Content>
  );
};