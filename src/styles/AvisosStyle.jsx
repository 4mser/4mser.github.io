import { styled } from "styled-components";

export const AvisosContainer = styled.div`
  width: 100%;
  padding-top: 7.6rem;

  .slider {
    height: 220px;
    display: flex;
    padding-bottom: 20px;
  }

  .swiper-pagination {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    transform: translate(-1.2rem, 8px);
  }

  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  .swiper-pagination-bullet-active {
    animation: pagination forwards 0.3s ease;

    @keyframes pagination {
      from {
      }
      to {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
`;

export const AvisosBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  h3 {
    position: absolute;
    width: calc(100% - 5rem);
    font-size: 0.8rem;
    font-weight: 400;
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
