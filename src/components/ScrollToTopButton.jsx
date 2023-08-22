import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: ${(props) => (props.isVisible ? "20px" : "-100%")};
  background: var(--Blue);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999; // Asegurarse de que el botón esté por encima del contenido
`;

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BackToTopButton isVisible={showButton} onClick={scrollToTop}>
      <Icon icon="bx:up-arrow" height="25" className="Icon" />
    </BackToTopButton>
  );
};

export default ScrollToTopButton;
