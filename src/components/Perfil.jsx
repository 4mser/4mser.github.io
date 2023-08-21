import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
useState;

const Perfil = ({ tema }) => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  const [newUsername, setNewUsername] = useState("");

  const handleChangeUsername = () => {
    const updatedUsername = prompt("Ingresa tu nuevo nombre de usuario:");
    if (updatedUsername) {
      setNewUsername(updatedUsername);
    }
  };

  if (isLoading) {
    // Mostrar algo mientras se verifica la autenticación
    return (
      <Iniciando>
        <p>Iniciando Sesión</p>
      </Iniciando>
    );
  }

  return (
    <Container>
      {isAuthenticated && (
        <UserProfile tema={tema}>
          <UserContainer tema={tema}>
            <img src={user.picture} alt={user.name} />
          </UserContainer>
          <NombreUsuario>
            <h2>{newUsername || user.name}</h2>
            <Icon
              icon="lucide:pen-line"
              height="19"
              className="icon"
              tema={tema}
              onClick={handleChangeUsername}
            />
          </NombreUsuario>
          <p>{user.email}</p>
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
      {/* <JSONPretty data={user} /> */}
    </Container>
  );
};

export default Perfil;

const NombreUsuario = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 10px;

  .icon {
    :hover {
      color: var(--Neon1);
    }
  }
`;

const Container = styled.div`
  padding-top: 9rem;
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

  p {
    opacity: 0.6;
  }
`;

const UserContainer = styled.div`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: gradient 8s ease infinite;
  background-size: 400% 400%;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 8px;
    border-radius: 50%;
    transition: 0.3s;
    background: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  }
`;

const Iniciando = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #101010;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2rem;
  }
`;
