import styled from "styled-components";
import { Container } from "components/common/Container.styled";
import { Logo } from "components/Header/Logo";
import { Nav } from "./Nav";

const Content = styled.header`
  padding: 40px 0 0 0;
`; 

export const Header = () => {
  return (
    <Content>
      <Container display='flex' justify="space-between">
        <Logo />
        <Nav />
      </Container>
    </Content>
  );
};