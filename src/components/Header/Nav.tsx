import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;

  li {
    &:not(:last-child) {
      margin: 0 24px 0 0;
    }
  }
`;

const NavLink = styled.a`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.03em;
  color: inherit;
  &:hover{
    color: ${p => p.theme.colors.blue};
  }
`;

export const Nav:React.FC = () => {
  return (
    <nav>
      <NavList>
        <li>
          <NavLink href="/">Work</NavLink>
        </li>
        <li>
          <NavLink href="/">Contact</NavLink>
        </li>
      </NavList>
    </nav>
  );
};