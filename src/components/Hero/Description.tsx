import styled from "styled-components";
import bgiMobile from '../../assets/hero/hero-mobile.png';
import bgiDesktop from '../../assets/hero/hero-desktop.png';
import { motion } from "framer-motion";
import { TitleH4, TextMedium } from "components/common/Typografy.styled";
import { Socials } from "components/Socials";

const Container = styled(motion.div)`
  display: grid;
  grid-row-gap: 40px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 612px;
  background-image: url(${bgiMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 632px;
    height: 904px;
    background-image: url(${bgiDesktop});
  }
`;

export const Description = () => {
  return (
    <Container
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Image />
      <div>
        <TitleH4>About our work</TitleH4>
        <TextMedium mB="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</TextMedium>
        <TextMedium mB="50px">ALMAX Design Agency</TextMedium>
        <Socials />
      </div>
    </Container>
  );
};