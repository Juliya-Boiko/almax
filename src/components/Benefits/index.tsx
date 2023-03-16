import { Container } from "components/common/Container.styled";
import { TitleH2 } from "components/common/Typografy.styled";
import { BenefitsList } from "./BenefitsList";
import { Section } from "components/common/Section.styled";

export const Benefits:React.FC = () => {
  return (
    <Section>
      <Container>
        <TitleH2>How we add value to your business</TitleH2>
        <BenefitsList />
      </Container>
    </Section>
  );
};