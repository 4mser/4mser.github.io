import { styled } from "styled-components";

const Footer = ({ tema }) => {
  return (
    <Container tema={tema}>
      <img
        src={
          tema === "dark"
            ? "https://app-valdi.s3.amazonaws.com/newlogo-08.png"
            : "https://app-valdi.s3.amazonaws.com/newlogolight-08.png"
        }
        alt="EOA-LOGO"
      />
      <p>©2023 - DESARROLLADO POR ENTROPÍA</p>
    </Container>
  );
};

export default Footer;

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 50%;
    object-fit: cover;
    opacity: 1;
    margin-bottom: 10px;
  }

  p {
    opacity: 0.4;
    font-size: 0.6rem;
    color: ${(props) => (props.tema === "light" ? "black" : "white")};
  }
`;
