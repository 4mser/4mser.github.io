import React from "react";
import { Icon } from "@iconify/react";
import { ofertaData } from "../data/OfertasData";
import {
  Container,
  ContainerOfertas,
  SubContainer,
  Oferta,
  Favorito,
  ImagenProducto,
  NombreProducto,
  DescripcionProducto,
  PrecioYReseña,
  Reseña,
} from "../styles/OfertasStyle";

const Ofertas = ({ tema }) => {
  const colorIconoCBD = "var(--Neon1)";
  const colorIconoTHC = "var(--Neon2)";

  return (
    <Container tema={tema}>
      <h3>Ofertas Espaciales</h3>
      <ContainerOfertas>
        <SubContainer>
          {ofertaData.map((oferta) => (
            <Oferta>
              <Favorito>
                <Icon
                  icon="mdi:heart-outline"
                  color="white"
                  height="21"
                  className="Fav"
                />
              </Favorito>
              <ImagenProducto>
                <img src={oferta.imgSrc} alt="" />
              </ImagenProducto>
              <NombreProducto>
                <p>{oferta.nombre}</p>
                <Icon
                  icon="pajamas:status-health"
                  className="icon"
                  color={colorIconoTHC}
                  width="12"
                ></Icon>
              </NombreProducto>

              <DescripcionProducto>
                <p>{oferta.descripcion}</p>
              </DescripcionProducto>

              <PrecioYReseña>
                <h4>{oferta.precio}</h4>
                <Reseña>
                  <div>
                    <Icon icon="ic:baseline-star" color="#ffc700" height="15" />
                    <p>{oferta.estrellas}</p>
                  </div>
                  <div>
                    <Icon
                      icon="majesticons:comment-text-line"
                      height="14"
                      hFlip={true}
                    />
                    <p>{oferta.comentarios}</p>
                  </div>
                </Reseña>
              </PrecioYReseña>
            </Oferta>
          ))}
        </SubContainer>
      </ContainerOfertas>
    </Container>
  );
};

export default Ofertas;
