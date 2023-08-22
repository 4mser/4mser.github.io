import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--Blue);
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  box-shadow: 0px 1px 7px 0px
    ${(props) => (props.tema === "dark" ? "var(--boxShadow)" : "var(--shadow)")};

  &:hover {
    background-color: #555;
  }
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
      <Icon icon="bx:up-arrow" height="20" className="Icon" />
    </BackToTopButton>
  );
};

export default ScrollToTopButton;
