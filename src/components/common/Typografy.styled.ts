import styled from "styled-components";

type ParagraphTypes = {
  mB: string,
  fW: number,
  fS: string,
  lH: string,
  color?: string
};

type TextType = {
  mB: string,
}

type LinkTypes = {
  fW: number
};

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

export const TitleH3 = styled.h3`
  margin: 0 0 32px 0;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 20px;
  line-height: 1.4;
`;

export const TitleH4 = styled.h4`
  margin: 0 0 20px 0;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 20px;
  line-height: 1.4;
  color: ${p => p.theme.colors.black};
`;

export const TextMedium = styled.p<TextType>`
  margin: 0 0 ${p => p.mB} 0;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 1.7;
  color: ${p => p.theme.colors.gray2};
`;

export const TextNormal = styled.p<TextType>`
  margin: 0 0 ${p => p.mB} 0;
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: 14px;
  line-height: 1.7;
  color: ${p => p.theme.colors.gray2};
`;

export const Text = styled.p<ParagraphTypes>`
  margin: 0 0 ${p => p.mB};
  font-weight: ${p => p.fW};
  font-size: ${p => p.fS};
  line-height: ${p => p.lH};
  color: ${p => p.color};
`;

export const Link = styled.a<LinkTypes>`
  font-weight: ${p => p.fW};
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.03em;
  color: inherit;
  &:hover{
    color: ${p => p.theme.colors.blue};
  }
`;