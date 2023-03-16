import { TitleH2 } from "components/common/Typografy.styled";
import { useState } from "react";
import styled from "styled-components";
import { services } from "../../data/services";
import { SelectGroup } from "./SelectGroup";
import { Text } from "components/common/Typografy.styled";
import { theme } from "styles/theme";
import { PrimaryBtn } from "components/buttons/PrimaryBtn";

const Content = styled.div`
  width: 100%;
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: ${p => p.theme.breakpoints.mobile};
    padding: 60px 0;
    margin: 0 auto;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
    padding: 80px 0;
    margin: 0 auto;
  }
`;

const Centered = styled.div`
  padding: 0 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    padding: 0 30px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 0 100px;
  }
`;

const Details = styled.div`
  margin: 0 0 70px 0;
`;

const Image = styled.img`
  margin: 0 0 30px 0;
`;

export const Services:React.FC  = () => {
  const [selected, setSelected] = useState<number>(0);

  const selectHandler = (id: number) => {
    setSelected(id);
  }

  return (
    <Content>
      <Centered>
        <TitleH2>Our services</TitleH2>
        <SelectGroup selected={selected} selectHandler={selectHandler} />

        <Details>
          <Text mB="20px" fW={theme.fontWeight.extra} fS="20px" lH="1.5">{services[selected].title}</Text>
          <Text mB="20px" fW={theme.fontWeight.normal} fS="14px" lH="1.7" color={theme.colors.gray3}>{services[selected].description}</Text>
          <Text mB="0" fW={theme.fontWeight.normal} fS="14px" lH="1.7" color={theme.colors.blue} >Examples of work</Text>
        </Details>
      </Centered>

      <Image src={services[selected].img} alt="Services" />
      <Centered>
        <PrimaryBtn type="button" title="Order service now" width="200px" />
      </Centered>
    </Content>
  );
};


  // mB: string,
  // fW: number,
  // fS: string,
  // lH: string,
  // color?: string