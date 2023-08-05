import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { styled } from "styled-components";

const Perfil = ({ tema }) => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <Container>
      {isAuthenticated && (
        <UserProfile tema={tema}>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          {/* <JSONPretty data={user} /> */}
        </UserProfile>
      )}
      {isAuthenticated ? (
        <Button tema={tema} onClick={() => logout()}>
          Cerrar Sesión
        </Button>
      ) : (
        <Button tema={tema} onClick={() => loginWithRedirect()}>
          Iniciar Sesión
        </Button>
      )}
    </Container>
  );
};

export default Perfil;

const Container = styled.div`
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.div`
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.127) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.tema === "dark" ? "var(--whiteColor)" : "var(--Item)"};
  border: 1px solid
    ${(props) =>
      props.tema === "dark" ? "var(--Border)" : "var(--BorderLight)"};
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  color: ${(props) =>
    props.tema === "dark" ? "var(--whiteColor)" : "var(--Item)"};

  img {
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;
