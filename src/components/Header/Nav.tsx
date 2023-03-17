import styled from "styled-components";
import { Link } from "components/common/Typografy.styled";
import { theme } from "styles/theme";

const NavList = styled.ul`
  display: flex;
  align-items: center;

  li {
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
          <Link fW={theme.fontWeight.medium} href="/">Work</Link>
        </li>
        <li>
          <Link fW={theme.fontWeight.medium} href="/">Contact</Link>
        </li>
      </NavList>
    </nav>
  );
};