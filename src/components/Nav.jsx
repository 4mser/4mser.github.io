import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// ICONS
import { Icon } from "@iconify/react";

const Nav = ({ handleTemaChange, tema, handleMenuChange, menuOpen }) => {
  return (
    <NavStyle tema={tema}>
      <Buttons tema={tema} onClick={handleMenuChange}>
        <Icon
          icon="solar:menu-dots-broken"
          style={{
            color: tema === "dark" ? "white" : "var(--blackColor)",
            fontSize: "2rem",
            transform: menuOpen === "open" ? "" : "",
            transition: ".2s",
          }}
        />
      </Buttons>
      <Link to="/" style={{ textDecoration: "none" }} className="link">
        <img
          src="https://appentropia.s3.amazonaws.com/psyquesters.png"
          alt=""
        />
      </Link>
      <Buttons onClick={handleTemaChange} tema={tema}>
        <Icon
          icon={
            tema === "dark"
              ? "line-md:sun-rising-filled-loop"
              : "line-md:moon-loop"
            /* : "game-icons:star-swirl" */
          }
          className={tema === "dark" ? "btn-tema-sun" : "btn-tema-moon"}
          style={{
            color: tema === "dark" ? "white" : "var(--blackColor)",
            fontSize: "1.4rem",
          }}
        />
      </Buttons>
    </NavStyle>
  );
};

export default Nav;

const NavStyle = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1.2rem;
  display: flex;
  transition: 0.3s ease;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background: ${(props) =>
    props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  z-index: 1000;

  .link {
    text-decoration: none;

    img {
      width: 11rem;
      filter: ${(props) => (props.tema === "dark" ? "" : "invert(1)")};
      transform: translateY(3px);
    }
  }
`;

const Buttons = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  /* background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"}; */
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;

  :hover {
    cursor: pointer;
    user-select: none;
  }

  .btn-tema-sun {
    animation: sun 0.2s forwards ease-in-out;

    @keyframes sun {
      from {
        transform: translateY(100%);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .btn-tema-moon {
    animation: moon 0.2s forwards ease-in-out;

    @keyframes moon {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;
