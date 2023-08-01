import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 6rem;
  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-left: 1.2rem;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;

export const ContainerOfertas = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  padding: 0 1.2rem 1rem 1.2rem;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const Oferta = styled.div`
  height: 12rem;
  width: 10rem;
  padding: 10px;
  background: var(--Item);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .Fav {
    right: 0;
  }
`;

export const Favorito = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ImagenProducto = styled.div`
  width: 100%;
  height: 6rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NombreProducto = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  p {
    font-size: 0.7rem;
    font-weight: 700;
  }
`;

export const DescripcionProducto = styled.div`
  width: 100%;
  p {
    font-size: 0.6rem;
  }
`;

export const PrecioYReseña = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
  }
`;

export const Reseña = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 0.7rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    p {
      margin-left: 2px;
    }
  }
`;
