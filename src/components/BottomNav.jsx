import React from "react";
import { Icon } from "@iconify/react";

import { ContainerNav, Button } from "../styles/BottomNavStyle";
import { Link } from "react-router-dom";

const BottomNav = ({ tema }) => {
  return (
    <ContainerNav tema={tema}>
      <Button tema={tema}>
        <Icon icon="game-icons:abstract-044" height="19" className="Icon" />
        <p>Ranking</p>
      </Button>

      <Button tema={tema}>
        <Icon icon="game-icons:burning-book" height="20" className="Icon" />
        <p>Colecciones</p>
      </Button>

      <Button tema={tema}>
        <Icon
          icon="game-icons:double-ringed-orb"
          height="22"
          className="Icon catalogo"
        />
        <p>PsyQuests</p>
      </Button>

      <Button tema={tema}>
        <Icon icon="game-icons:steelwing-emblem" height="22" className="Icon" />
        <p>Facciones</p>
      </Button>

      <Link
        to="/perfil"
        style={{ textDecoration: "none", color: "var(--textLight)" }}
        className="link"
      >
        <Button tema={tema}>
          <Icon icon="game-icons:rear-aura" height="20" className="Icon" />
          <p>Perfil</p>
        </Button>
      </Link>
    </ContainerNav>
  );
};

export default BottomNav;
