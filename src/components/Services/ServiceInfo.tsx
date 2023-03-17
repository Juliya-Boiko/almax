import { motion } from "framer-motion";
import { services } from "data/services";
import { TitleH3, TextNormal } from "components/common/Typografy.styled";

type Props = {
  selected: number
};

export const ServiceInfo = ({ selected }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <TitleH3>{services[selected].title}</TitleH3>
      <TextNormal mB="0" >{services[selected].description}</TextNormal>
    </motion.div>
  );
};