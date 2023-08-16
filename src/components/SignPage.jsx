import React from "react";
import { styled } from "styled-components";
import ReactPlayer from "react-player";
import videoSource from "../assets/bg.mp4";
import { useAuth0 } from "@auth0/auth0-react";

const VideoComponent = () => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();
  return (
    <VideoContainer>
      <VideoPlayer
        url="https://appentropia.s3.amazonaws.com/bg.mp4"
        playing={true}
        loop={true}
        muted={true}
      />
      <Logo>
        <img
          src="https://appentropia.s3.amazonaws.com/psyquesters.png"
          alt=""
        />
      </Logo>
      <Text>
        "En la penumbra del tiempo, aguarda el vértigo del misterio, donde tus
        pasos despiertan un mundo oculto y fascinante"
      </Text>
      <Button onClick={() => loginWithRedirect()}>Ingresar</Button>
    </VideoContainer>
  );
};

export default VideoComponent;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden; /* Añadir overflow: hidden para asegurar que el video ocupe todo el contenedor */
`;

const VideoPlayer = styled(ReactPlayer)`
  width: 100% !important; /* Usar !important para asegurar que los estilos se apliquen */
  height: 100% !important;
  object-fit: cover;
  transform: rotate(90deg) scale(3);
`;

const Logo = styled.div`
  width: 50%;
  height: 2rem;
  top: 15%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Text = styled.div`
  width: 100%;
  position: absolute;
  bottom: 25%;
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
  text-align: center;
  padding: 2rem;
`;

const Button = styled.div`
  width: 90%;
  height: 4rem;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 15%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  cursor: pointer;
`;
