import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 60px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 100px 0;
  }
`;