import { TitleH1, TextNormal } from "components/common/Typografy.styled";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";
import { motion } from "framer-motion";

export const Primary = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <TitleH1>Adding Creativity to Your Triumph</TitleH1>
      <TextNormal mB="60px">We’re a diverse group of designers, strategists, engineers and wordsmiths who make things people love to use. We help the world’s most progressive brands solve problems, seize opportunities and generate growth.</TextNormal>
      <PrimaryBtn type="button" title="Get in touch" width="200px" onClick={() => window.location.href = "#contact"} />
    </motion.div>
  );
};

// 