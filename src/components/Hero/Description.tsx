import styled from "styled-components";
import bgiMobile from '../assets/hero/hero-mobile.png';
import bgiDesktop from '../assets/hero/hero-desktop.png';
import { About } from "./About";

const Container = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 612px;
  margin: 0 0 40px 0;
  background-image: url(${bgiMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 632px;
    height: 904px;
    margin: 0 20px 0 0;
    background-image: url(${bgiDesktop});
  }
`;

export const Description:React.FC = () => {
  return (
    <Container>
      <Image />
      <About />
    </Container>
  );
};