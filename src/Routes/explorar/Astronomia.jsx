import React from "react";
import NasaAPOD from "../../components/NasaAPOD";
import { styled } from "styled-components";

const Astronomia = ({ tema }) => {
  return (
    <div>
      <NasaAPOD tema={tema}></NasaAPOD>
      <Nasa tema={tema}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
          alt=""
        />
        <p>Data from Nasa</p>
      </Nasa>
    </div>
  );
};

export default Astronomia;

const Nasa = styled.div`
  height: 3rem;
  padding: 6px 1rem;
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--borderDark);
  gap: 2px;
  z-index: 2;
  box-shadow: 0 2px 15px -5px var(--boxShadow);
  background: linear-gradient(
    -45deg,
    rgb(11, 11, 11) 20%,
    #273647 60%,
    #151d27 80%,
    rgb(11, 11, 11) 100%
  );
  animation: gradient 10s ease infinite;
  background-size: 700% 100%;

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
    height: 100%;
    object-fit: contain;
    margin-top: 2px;
  }

  p {
    width: 100%;
    font-size: 13px;
    font-weight: 600;
    /* color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"}; */
    color: var(--textLight);
  }
`;
