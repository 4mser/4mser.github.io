import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const Nav = ({ handleTemaChange, tema, handleMenuChange, menuOpen }) => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();
  const location = useLocation();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [minimizeNav, setMinimizeNav] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > 0 && !minimizeNav) {
      setMinimizeNav(true);
    } else if (currentPosition === 0 && minimizeNav) {
      setMinimizeNav(false);
    }

    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, minimizeNav]);

  return (
    <NavStyle tema={tema}>
      <Header>
        {isAuthenticated ? (
          <HelloSection tema={tema}>
            <h2>Hola, {user.name.split(" ")[0]}!</h2>
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
        ) : (
          <HelloSection tema={tema}>
            <h2>Hola!</h2>
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
        )}
        <HeaderButtons isAuthenticated={isAuthenticated}>
          {/* <Buttons onClick={handleMenuChange} tema={tema}>
            <Icon
              icon="solar:menu-dots-broken"
              style={{
                color: tema === "dark" ? "var(--TextLight)" : "var(--btnLight)",
                fontSize: "2rem",
              }}
            />
          </Buttons> */}
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
                color: tema === "dark" ? "var(--TextLight)" : "var(--btnLight)",
                fontSize: "1.4rem",
              }}
            />
          </Buttons>
          {isAuthenticated ? (
            <Buttons tema={tema}>
              <Icon
                icon="carbon:notification-filled"
                style={{
                  color:
                    tema === "dark" ? "var(--TextLight)" : "var(--btnLight)",
                  fontSize: "20px",
                  transform: menuOpen === "open" ? "" : "",
                  transition: ".2s",
                }}
              />
            </Buttons>
          ) : (
            ""
          )}

          <Link
            to="/perfil"
            style={{ textDecoration: "none" }}
            tema={tema}
            className="link"
          >
            <Buttons tema={tema}>
              {isAuthenticated ? (
                <img src={user.picture} alt={user.name} />
              ) : (
                <Icon
                  icon="iconamoon:profile-fill"
                  style={{
                    color:
                      tema === "dark" ? "var(--TextLight)" : "var(--btnLight)",
                    fontSize: "22px",
                    transform: menuOpen === "open" ? "" : "",
                    transition: ".2s",
                  }}
                />
              )}
            </Buttons>
          </Link>
        </HeaderButtons>
      </Header>

      <ContainerNav
        tema={tema}
        style={{ height: minimizeNav ? "0" : "3.3rem" }}
      >
        <Link to="/" className="link" style={{ textDecoration: "none" }}>
          <Button
            tema={tema}
            style={{
              color: location.pathname === "/" ? "var(--Blue)" : "",
            }}
          >
            <Icon icon="basil:home-outline" height="27" className="Icon" />
          </Button>
        </Link>

        {/* <Link to="/buscar" className="link" style={{ textDecoration: "none" }}>
          <Button
            tema={tema}
            style={{
              color: location.pathname === "/buscar" ? "var(--Blue)" : "",
            }}
          >
            <Icon icon="basil:search-solid" height="27" className="Icon" />
          </Button>
        </Link> */}

        <Link
          to="/explorar"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <Button
            tema={tema}
            style={{
              color: location.pathname === "/explorar" ? "var(--Blue)" : "",
            }}
          >
            <Icon icon="basil:copy-outline" height="27" className="Icon" />
          </Button>
        </Link>

        <Link
          to="/ubicaciones"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <Button
            tema={tema}
            style={{
              color: location.pathname === "/ubicaciones" ? "var(--Blue)" : "",
            }}
          >
            <Icon icon="heroicons:map-pin" height="27" className="Icon" />
          </Button>
        </Link>

        <Link
          to="/guardado"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <Button
            tema={tema}
            style={{
              color: location.pathname === "/guardado" ? "var(--Blue)" : "",
            }}
          >
            <Icon icon="basil:bookmark-outline" height="27" className="Icon" />
          </Button>
        </Link>

        <Link to="/tienda" className="link" style={{ textDecoration: "none" }}>
          <Button
            tema={tema}
            style={{
              color: location.pathname === "/tienda" ? "var(--Blue)" : "",
            }}
          >
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
  user-select: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${(props) =>
    props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  z-index: 1000;

  .link {
    text-decoration: none;
    user-select: none;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }

  .Icon {
    font-weight: 800;
    user-select: none;
  }
`;

const Header = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  user-select: none;
  justify-content: space-between;
  padding: 1.2rem 1.2rem 10px 1.2rem;
`;

const HeaderButtons = styled.div`
  flex-direction: row;
  user-select: none;
  display: flex;
  width: ${(props) => (props.isAuthenticated ? "135px" : "85px")};
  justify-content: space-between;
`;

const HelloSection = styled.div`
  h2 {
    font-size: 12px;
    user-select: none;
    font-weight: 400;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }

  p {
    font-size: 15px;
    font-weight: 700;
    user-select: none;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

const Buttons = styled.div`
  width: 36px;
  height: 36px;
  user-select: none;
  border-radius: 35%;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--white2)"};
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 7px -3px ${(props) => (props.tema === "dark" ? "var(--boxShadow)" : "var(--shadow)")};
  overflow: hidden;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    user-select: none;
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

export const ContainerNav = styled.div`
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  user-select: none;
  display: flex;
  transition: 0.3s ease;
  user-select: none;
  justify-content: space-between;
  padding: 0 1.2rem;
  align-items: center;
  border-bottom: 1px solid
    ${(props) =>
      props.tema === "dark" ? "var(--borderDark)" : "var(--BorderLight)"};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  user-select: none;
  justify-content: space-between;
  flex-direction: column;
  color: ${(props) =>
    props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
`;
