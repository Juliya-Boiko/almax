import { Container } from "components/common/Container.styled";
import { TitleH2 } from "components/common/Typografy.styled";
import { Wrapper } from "components/common/Wrapper.styled";

type Props = {
  title: string,
  id?: string,
  children: JSX.Element | JSX.Element[]
};

export const Section = ({ title, id, children }: Props) => {
  return (
    <Wrapper id={id}>
      <Container>
        <TitleH2>{title}</TitleH2>
        {children}
      </Container>
    </Wrapper>
  );
};