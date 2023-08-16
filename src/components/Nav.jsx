import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { ContainerNav, Button } from "/src/styles/BottomNavStyle.jsx";

// ICONS
import { Icon } from "@iconify/react";

const Nav = ({ handleTemaChange, tema, handleMenuChange, menuOpen }) => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  return (
    <NavStyle tema={tema}>
      <Header>
        <HelloSection tema={tema}>
          <h2>Hola, {user.name}!</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <Icon
              icon="fluent:location-24-filled"
              height="15"
              style={{ color: "var(--Blue)", transform: "translateY(-1px)" }}
            />
            <p>Valdivia</p>
          </div>
        </HelloSection>
        <HeaderButtons>
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
          <Buttons tema={tema} onClick={handleMenuChange}>
            <Icon
              icon="carbon:notification-filled"
              style={{
                color: tema === "dark" ? "white" : "var(--blackColor)",
                fontSize: "20px",
                transform: menuOpen === "open" ? "" : "",
                transition: ".2s",
              }}
            />
          </Buttons>

          <Link
            to="/perfil"
            style={{ textDecoration: "none" }}
            tema={tema}
            className="link"
          >
            <Buttons>
              <img src={user.picture} alt={user.name} />
            </Buttons>
          </Link>
        </HeaderButtons>
      </Header>

      <ContainerNav tema={tema}>
        <Button tema={tema}>
          <Icon icon="basil:home-outline" height="27" className="Icon" />
        </Button>

        <Button tema={tema}>
          <Icon icon="basil:search-solid" height="27" className="Icon" />
        </Button>

        <Link to="/" className="link" style={{ textDecoration: "none" }}>
          <Button tema={tema}>
            <Icon icon="heroicons:map-pin" height="27" className="Icon" />
          </Button>
        </Link>

        <Button tema={tema}>
          <Icon icon="basil:bookmark-outline" height="27" className="Icon" />
        </Button>

        <Link
          to="/perfil"
          style={{ textDecoration: "none" }}
          tema={tema}
          className="link"
        >
          <Button tema={tema}>
            <Icon
              icon="basil:shopping-bag-outline"
              height="27"
              className="Icon"
            />
          </Button>
        </Link>
      </ContainerNav>
    </NavStyle>
  );
};

export default Nav;

const NavStyle = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background: ${(props) =>
    props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  z-index: 1000;

  .link {
    text-decoration: none;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }

  .Icon {
    font-weight: 800;
  }
`;

const Header = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.2rem 1.2rem 0 1.2rem;
`;

const HeaderButtons = styled.div`
  flex-direction: row;
  display: flex;
  width: 140px;
  justify-content: space-between;
`;

const HelloSection = styled.div`
  h2 {
    font-size: 12px;
    font-weight: 400;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const Buttons = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 35%;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--whiteColor)"};
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;

  :hover {
    cursor: pointer;
    user-select: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
