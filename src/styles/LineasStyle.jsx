import { styled } from "styled-components";

export const LineasContainer = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  margin-bottom: 10px;

  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
  }
`;

export const ContainerCompuesto = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;

  gap: 10px;
`;

export const Compuesto = styled.div`
  width: 33%;
  height: 3rem;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.127) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid
    ${(props) =>
      props.tema === "dark" ? "var(--Border)" : "var(--BorderLight)"};

  .icon {
    font-size: 1.5rem;
    transition: 0.2s;
  }

  p {
    font-size: 0.8rem;
    color: ${(props) =>
      props.tema === "dark" ? "var(--whiteColor)" : "black"};
  }
`;
