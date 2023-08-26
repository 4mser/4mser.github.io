import { styled } from "styled-components";

const Footer = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src="https://appentropia.s3.amazonaws.com/EOA-PNG.png"
        alt="EOA-LOGO"
      />
      <p>©2023 - DESARROLLADO POR ENTROPÍA</p>
    </Container>
  );
};

export default Footer;

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 50%;
    object-fit: cover;
    opacity: 0.8;

    filter: ${(props) => (props.tema === "dark" ? "" : "invert(1)")};
  }

  p {
    opacity: 0.4;
    font-size: 0.6rem;
    color: ${(props) => (props.tema === "light" ? "black" : "white")};
  }
`;
