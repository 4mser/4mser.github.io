import React from "react";
import { styled } from "styled-components";

const Menu = ({ menuOpen, handleMenuChange }) => {
  return (
    <MenuContainer menuOpen={menuOpen} onClick={handleMenuChange}>
      Menu
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: fixed;
  z-index: 2000;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.menuOpen === "open" ? "100%" : "0")};
  animation: ${(props) =>
    props.menuOpen === "open"
      ? "menu .5s ease forwards"
      : "menuClose .5s ease forwards"};
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 100%;
    background: linear-gradient(
      -90deg,
      #0b0b0b 20%,
      #273647 60%,
      #151d27 80%,
      #0b0b0b 100%
    );
    animation: gradient 10s ease infinite;
    background-size: 700% 100%;
    z-index: -1;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes menu {
    from {
      height: 0;
    }
    to {
      height: 80%;
    }
  }

  @keyframes menuClose {
    from {
      height: 80%;
    }
    to {
      height: 0;
      display: none;
    }
  }
`;
