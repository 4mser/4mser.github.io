import { styled } from "styled-components";

export const ContainerNav = styled.div`
  width: 100%;
  height: 4rem;
  bottom: 1rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--bg_dark)" : "var(--NavLight)"};
  z-index: 1000;
  display: flex;
  backdrop-filter: blur(10px);
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid
    ${(props) => (props.tema === "dark" ? "#ffffff2b" : "var(--BorderLight)")};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: ${(props) =>
    props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
`;
