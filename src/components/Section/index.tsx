import styled from "styled-components";
import { Container } from "components/common/Container.styled";
import { TitleH2 } from "components/common/Typografy.styled";

type SectionProps = {
  title: string,
  children: JSX.Element
};

const Wrapper = styled.div`
  padding: 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 100px 0;
  }
`;

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Container>
        <TitleH2>{title}</TitleH2>
        {children}
      </Container>
    </Wrapper>
  );
};