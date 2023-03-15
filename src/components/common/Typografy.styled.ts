import styled from "styled-components";

type ParagraphTypes = {
  mB: string,
  fW: number,
  fS: string,
  lH: string,
  color?: string
}

export const TitleH1 = styled.h1`
  margin: 0 0 24px 0;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 48px;
  line-height: 1.1;
`;

export const TitleH2 = styled.h2`
  margin: 0 0 70px 0;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 36px;
  line-height: 1.2;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 80px 0;
    text-align: center;
  }
`;

export const Text = styled.p<ParagraphTypes>`
  margin: 0 0 ${p => p.mB};
  font-weight: ${p => p.fW};
  font-size: ${p => p.fS};
  line-height: ${p => p.lH};
  color: ${p => p.color};
`;