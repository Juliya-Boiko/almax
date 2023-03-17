import { TitleH1, TextNormal } from "components/common/Typografy.styled";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";

export const Primary = () => {
  return (
    <div>
      <TitleH1>Adding Creativity to Your Triumph</TitleH1>
      <TextNormal mB="60px">We’re a diverse group of designers, strategists, engineers and wordsmiths who make things people love to use. We help the world’s most progressive brands solve problems, seize opportunities and generate growth.</TextNormal>
      <PrimaryBtn type="button" title="Get in touch" width="200px" onClick={() => window.location.href = "#contact"} />
    </div>
  );
};

// 