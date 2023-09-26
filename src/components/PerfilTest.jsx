import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import Login from "../pages/Login";
useState;

const Perfil = ({ tema }) => {
  return (
    <Container>
      <Login></Login>
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
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .icon {
    :hover {
      color: var(--Neon1);
    }
  }
`;

const Container = styled.div`
  padding-top: 8.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.div`
  width: fit-content;
  padding: 7px 10px;
  position: absolute;
  bottom: 1rem;
  right: 1.2rem;
  font-size: 10px;
  border-radius: 5px;
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
  flex-direction: column;
  margin-bottom: 20px;

  color: ${(props) =>
    props.tema === "dark" ? "var(--whiteColor)" : "var(--Item)"};

  p {
    opacity: 0.6;
  }
`;

const Portada = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  z-index: -1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PerfilData = styled.div`
  width: 100%;
  padding: 6.9rem 1.2rem 1rem 1.2rem;
  height: auto;
`;

const ProfileFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  transition: 0.1s ease;
  border: 5px solid
    ${(props) => (props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
