import React from "react";
import { styled } from "styled-components";

const SinContenido = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img src="https://app-valdi.s3.amazonaws.com/hormiga.png" alt="" />
      <h3>Sin contenido relacionado...aún</h3>
    </Container>
  );
};

export default SinContenido;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20%;
  text-align: center;

  h3 {
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "var(--fontLight)"};
    font-weight: 400;
    font-size: 20px;
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
