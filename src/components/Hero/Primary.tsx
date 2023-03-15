import { TitleH1 } from "components/common/Typografy.styled";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";
import styled from "styled-components";

const Container = styled.div`
  max-width: 370px;
  margin: 0 auto 60px auto;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 530px;
    margin: 0;
  }
`;

const Text = styled.p`
  margin: 0 0 60px 0;
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: 14px;
  line-height: 1.7;
  color: ${p => p.theme.colors.gray2};
`;

export const Primary:React.FC = () => {
  return (
    <Container>
      <TitleH1>Adding Creativity to Your Triumph</TitleH1>
      <Text>We’re a diverse group of designers, strategists, engineers and wordsmiths who make things people love to use. We help the world’s most progressive brands solve problems, seize opportunities and generate growth.</Text>
      <PrimaryBtn type="button" title="Get in touch" width="200px" />
    </Container>
  );
};