import { Container } from "components/common/Container.styled";
import { TitleH2 } from "components/common/Typografy.styled";
import { Wrapper } from "components/common/Wrapper.styled";

type SectionProps = {
  title: string,
  children: JSX.Element | JSX.Element[]
};

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