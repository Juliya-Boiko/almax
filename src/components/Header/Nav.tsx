import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;

  li {
    font-weight: ${p => p.theme.fontWeight.medium};
    font-size: 14px;
    line-height: 1.1;
    letter-spacing: 0.03em;
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
        <li onClick={() => window.location.href = "#work"}>
          Work
        </li>
        <li onClick={() => window.location.href = "#contact"}>
          Contact
        </li>
      </NavList>
    </nav>
  );
};