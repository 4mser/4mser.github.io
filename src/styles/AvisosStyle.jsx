import { styled } from "styled-components";

export const AvisosContainer = styled.div`
  width: 100%;
  padding-top: 8.5rem;
  left: 0;

  .slider {
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.2rem 2.5rem 1.2rem;
  }

  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;

export const AvisosBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  /* box-shadow: 0 2px 5px -2px var(--Item); */
  border: 1px solid
    ${(props) =>
      props.tema === "dark" ? "var(--Border)" : "var(--BorderLight)"};
  padding: 7px;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.127) 0px 2px 8px 0px;

  h3 {
    position: absolute;
    width: calc(100% - 5rem);
    font-size: 0.8rem;
    font-weight: 400;
    color: white;
    filter: drop-shadow(0 1px 2px black);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid
      ${(props) =>
        props.tema === "dark" ? "var(--Border)" : "var(--BorderLight)"};
  }
`;
