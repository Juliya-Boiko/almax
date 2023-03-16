import styled from "styled-components";

type StyleTypes = {
  //padding: string
  // display?: string
  // justify?: string
}

export const Section = styled.section<StyleTypes>`
  //display: flex;
  //flex-direction: column;
  padding: 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    /* width: ${p => p.theme.breakpoints.desktop}; */
    padding: 100px 0;
    /* margin: 0 auto;
    flex-direction: row;
    justify-content: space-between; */
  }
`;