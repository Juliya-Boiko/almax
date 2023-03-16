import { BenefitsList } from "./BenefitsList";
import { Section } from "components/Section";

export const Benefits:React.FC = () => {
  return (
    <Section title="How we add value to your business">
      <BenefitsList />
    </Section>
  );
};