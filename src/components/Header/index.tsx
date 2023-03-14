import { Logo } from "components/Header/Logo";
import { Nav } from "./Nav";
import { Container } from "components/common/Container.styled";
import 'modern-normalize';
import styled from "styled-components";

const Content = styled.header`
  padding: 40px 0 0 0;
`; 

export const Header:React.FC = () => {
  return (
    <Content>
      <Container display='flex' justify="space-between">
        <Logo />
        <Nav />
      </Container>
    </Content>
  );
};