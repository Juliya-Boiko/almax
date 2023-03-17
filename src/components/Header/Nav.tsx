import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavList = styled.ul`
  display: flex;
  align-items: center;

  li {
    font-weight: ${p => p.theme.fontWeight.medium};
    font-size: 14px;
    line-height: 1.1;
    letter-spacing: 0.03em;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
      color: ${p => p.theme.colors.blue};
    }
    &:not(:last-child) {
      margin: 0 24px 0 0;
    }
  }
`;

export const Nav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <AnchorLink href='#work'>Work</AnchorLink>
        </li>
        <li>
          <AnchorLink href='#contact'>Contact</AnchorLink>
        </li>
      </NavList>
    </nav>
  );
};