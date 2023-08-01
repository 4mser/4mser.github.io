import { styled } from "styled-components";

export const ContainerNav = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  bottom: 0;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--NavLight)"};
  left: 0;
  z-index: 1000;
  display: flex;
  backdrop-filter: blur(10px);
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid
    ${(props) => (props.tema === "dark" ? "#ffffff2b" : "var(--BorderLight)")};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: ${(props) =>
    props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};

  p {
    font-size: 0.5rem;
    position: absolute;
    bottom: 13px;
  }

  .Icon {
    transform: translateY(-7px);
  }

  .catalogo {
    transform: translateY(-6px);
  }
`;
