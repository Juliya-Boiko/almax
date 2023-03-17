import styled from "styled-components";
import { team, MemberType } from "data/team";
import { RiInstagramFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { TitleH4, TextMedium } from "components/common/Typografy.styled";
import { IoMdArrowForward } from "react-icons/io";
import { IconBtn } from "components/buttons/IconBtn";

type Props = {
  selected: number,
  nextHandler: () => void
};

const Content = styled.div`
  display: grid;
  grid-row-gap: 100px;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

const MainInfo = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 632px;
    margin: 0 50px 0 0;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 0 0 40px 0;
`;

const NameBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Socials = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
`;

const NextImage = styled.img`
  width: 120px;
  filter: grayscale(100%);
`;

export const TeamInfo = ({ selected, nextHandler }: Props) => {
  const item: MemberType = team[selected];
  const next = (): number => { return selected === 3 ? 0 : selected + 1 };
  const nextItem: MemberType = team[next()];

  return (
    <Content>
      <MainInfo>
        <Image src={item.avatar} alt={item.name} />
        <NameBlock>
          <TitleH4>{item.name}</TitleH4>
          <IconBtn onClick={nextHandler}>
            <IoMdArrowForward size="34" />
          </IconBtn>
        </NameBlock>
        <TextMedium mB="20px" >{item.descr}</TextMedium>
        <TextMedium mB="50px">{item.option}</TextMedium>
        <Socials>
          <a href="/"><RiTwitterFill size="16" /></a>
          <a href="/"><RiInstagramFill size="16" /></a>
          <a href="/"><RiLinkedinFill size="16" /></a>
        </Socials>
      </MainInfo>
      <div>
        <TitleH4>{nextItem.name}</TitleH4>
        <NextImage src={nextItem.avatar} alt={nextItem.name}  />
      </div>
    </Content>
  );
};