import React from "react";
import { styled } from "styled-components";

const Menu = ({ tema, menuOpen, handleMenuChange }) => {
  return (
    <MenuContainer tema={tema} menuOpen={menuOpen} onClick={handleMenuChange}>
      <p>Sin Notificaciones</p>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: fixed;
  z-index: 2000;
  width: auto;
  top: 5rem;
  padding: 10px;
  border: 1px solid var(--borderDark);
  overflow: hidden;
  display: flex;
  right: 4.2rem;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  height: ${(props) => (props.menuOpen === "open" ? "100%" : "0")};
  animation: ${(props) =>
    props.menuOpen === "open"
      ? "menu .5s ease forwards"
      : "menuClose 5s ease forwards"};
  background: ${(props) =>
    props.tema === "dark"
      ? "var(--notificationDark)"
      : "var(--notificationLight)"};

  color: ${(props) =>
    props.tema === "dark"
      ? "var(--notificationLight)"
      : "var(--notificationDark)"};
  p {
    font-size: 12px;
  }

  @keyframes menu {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: 2rem;
      opacity: 1;
    }
  }

  @keyframes menuClose {
    from {
      height: 2rem;
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }
`;
