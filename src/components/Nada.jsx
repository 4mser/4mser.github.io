import React from "react";
import { styled } from "styled-components";

const Nada = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img src="https://app-valdi.s3.amazonaws.com/hormiga.png" alt="" />
      <h2>SECCIÓN EN CONSTRUCCIÓN</h2>
    </Container>
  );
};

export default Nada;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20%;
  text-align: center;
  gap: 1rem;

  h2 {
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
    font-weight: 600;
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
