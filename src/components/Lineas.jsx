import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

import {
  LineasContainer,
  ContainerCompuesto,
  Compuesto,
} from "../styles/LineasStyle";

const Lineas = ({ tema }) => {
  const colorIconoStgo = "var(--Neon2)";
  const colorIconoValdi = "var(--Neon1)";
  const colorIconoPto = "var(--Neon3)";
  return (
    <LineasContainer tema={tema}>
      <h2>Ciudades</h2>
      <ContainerCompuesto>
        <Compuesto tema={tema}>
          <p>Santiago</p>
          <Icon
            icon="pajamas:status-health"
            className="icon"
            color={colorIconoStgo}
          />
        </Compuesto>

        <Compuesto tema={tema}>
          <p>Valdivia</p>
          <Icon
            icon="pajamas:status-health"
            className="icon"
            color={colorIconoValdi}
          />
        </Compuesto>

        <Compuesto tema={tema}>
          <p>Puerto Varas</p>
          <Icon
            icon="pajamas:status-health"
            className="icon"
            color={colorIconoPto}
          />
        </Compuesto>
      </ContainerCompuesto>
    </LineasContainer>
  );
};

export default Lineas;
