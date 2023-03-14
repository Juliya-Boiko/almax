import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { SlSocialDribbble, SlSocialInstagram } from "react-icons/sl";
import styled from "styled-components";

const socials = [
  {
    id: 0,
    name: 'Dribble',
    link: '',
    component: <SlSocialDribbble size="24" />
  },
  {
    id: 1,
    name: 'Instagram',
    link: '',
    component: <SlSocialInstagram size="24" />
  },
  {
    id: 2,
    name: 'Behance',
    link: '',
    component: <FaBehance size="24" />
  },
  {
    id: 3,
    name: 'LinkedIn',
    link: '',
    component: <FaLinkedinIn size="24" />
  },
];

const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  li {
    &:not(:last-child) {
      margin: 0 30px 0 0;
    }
  }
  a {
    &:hover{
    color: ${p => p.theme.colors.blue};
  }
  }
`;

export const Socials:React.FC = () => {
  return (
    <SocialsList>
      {socials.map(({ id, link, component }) => {
        return <li key={id}>
          <a href={link}>
            {component}
          </a>
        </li>
      })}
    </SocialsList>
  );
}