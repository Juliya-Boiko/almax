import styled from "styled-components";
import { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.black};
    transform: scale(1.2);
  }
`;

export const Scroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const visibilityHandler = () => {
      window.pageYOffset > 300 ? setShowScroll(true) : setShowScroll(false); 
    };
    window.addEventListener('scroll', visibilityHandler);
    return () => {
      window.removeEventListener('scroll', visibilityHandler);
    };
  }, []);

  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll
        ? <Button onClick={scrollHandler}>
            <IoMdArrowUp size="30" />
          </Button>
        : null}
    </>
  );
}