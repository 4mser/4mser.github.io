import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  padding-top: 11.5rem;
  left: 0;
  color: var(--whiteColor);

  @media (min-width: 1000px) {
    padding-top: 33.5rem;
  }
`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;

  h3 {
    font-weight: 100;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  @media (min-width: 1000px) {
    h3 {
      display: none;
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1.2rem;

  @media (min-width: 1000px) {
    padding: 1.2rem 15vw;
  }
`;

export const AreasContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  .espacio {
    display: flex;
    width: 1.2rem;
    height: 2rem;
    background: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
    color: ${(props) =>
      props.tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)"};
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(0, auto);
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .espacio {
      display: none;
    }
  }
`;

export const AreaBox = styled.div`
  width: 12rem;
  height: 4.6rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--blackColor)" : "var(--blackColor)"};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  margin-right: 1rem;
  user-select: none;
  flex-shrink: 0;
  filter: ${(props) =>
    props.tema === "dark" ? "" : "invert(.95) hue-rotate(180deg) saturate(3)"};
  color: ${(props) => (props.tema === "dark" ? "" : "white")};
  font-size: 0.7rem;
  border-radius: 5px;
  transition: 0.2;

  :hover {
    filter: ${(props) =>
      props.tema === "dark"
        ? "invert(1) hue-rotate(180deg) saturate(2)"
        : "invert(0)"};
  }

  .icono-animado {
    width: 4rem;
    transition: 0.2s;
  }

  @media (min-width: 1000px) {
    margin-right: 0;
    width: 100%;
    font-size: 0.7vw;
    height: 5.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    flex-direction: column-reverse;

    p {
      font-size: 0.6vw;
    }
  }

  @media (min-width: 1001px) and (max-width: 1500px) {
    height: 5rem;

    .icono-animado {
      width: 100%;
      height: 4rem;
    }
    p {
      display: none;
    }
  }
`;
