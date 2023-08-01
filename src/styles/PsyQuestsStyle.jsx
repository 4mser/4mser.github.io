import { styled } from "styled-components";

export const QuestsContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  left: 0;
  padding-bottom: 7rem;
  h2 {
    font-size: 1rem;
    font-weight: 500;
    padding: 0 1.2rem;
    color: ${(props) =>
      props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
    margin-bottom: 20px;
  }

  .slider {
    height: 15rem;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid
      ${(props) =>
        props.tema === "dark" ? "var(--Border)" : "var(--BorderLight)"};
    border-radius: 10px;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;

export const QuestsBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    position: absolute;
    width: calc(100% - 2rem);
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;
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
