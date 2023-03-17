import styled from "styled-components";

type StyleTypes = {
  display?: string
  justify?: string
}

export const Container = styled.div<StyleTypes>`
  width: 100%;
  display: ${p => p.display};
  align-items: ${p => p.display ? 'center' : null};
  justify-content: ${p => p.justify};
  padding: 0 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: ${p => p.theme.breakpoints.mobile};
    padding: 0 30px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
    padding: 0 100px;
    margin: 0 auto;
  }
`;