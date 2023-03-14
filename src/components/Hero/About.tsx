import { Socials } from "components/Socials";
import styled from "styled-components";
import { theme } from "styles/theme";

type StyleTypes = {
  mB: string,
  fW: number,
  fS: string,
  lH: string,
  color?: string
}

const Container = styled.div`
  max-width: 370px;
  margin: 0 auto ;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 300px;
    margin: 0;
  }
`;

const Text = styled.p<StyleTypes>`
  margin: 0 0 ${p => p.mB};
  font-weight: ${p => p.fW};
  font-size: ${p => p.fS};
  line-height: ${p => p.lH};
  color: ${p => p.color};
`;

export const About:React.FC = () => {
  return (
    <Container>
      <Text mB="10px" fW={theme.fontWeight.extra} fS="14px" lH="1.7" color={theme.colors.black} >About our work</Text>
      <Text mB="20px" fW={theme.fontWeight.medium} fS="12px" lH="1.7" color={theme.colors.gray2} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      <Text mB="50px" fW={theme.fontWeight.medium} fS="12px" lH="1.7" color={theme.colors.gray3} >ALMAX Design Agency</Text>
      <Socials />
    </Container>
  );
}