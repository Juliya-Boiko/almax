import styled from "styled-components";
import { Container } from "components/common/Container.styled";
import { Socials } from "components/Socials";

const Content = styled.footer`
  padding: 50px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 65px 0;
  }
  color: ${p => p.theme.colors.gray2};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Text = styled.p`
  margin: 0 0 50px 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 12px;
  line-height: 2;
  span {
    font-weight: ${p => p.theme.fontWeight.normal};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
     margin: 0;
  }
`;

export const Footer:React.FC = () => {
  return (
    <Content>
      <Container>
        <Section>
          <Text>© 2022 Almax design agency. <span>All rights reserved</span></Text>
          <Socials />
        </Section>
      </Container>
    </Content>
  );
}