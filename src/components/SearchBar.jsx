import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

const SearchBar = ({ tema }) => {
  return (
    <SearchBarStyled tema={tema}>
      <Icon
        icon="game-icons:dna1"
        style={{
          fontSize: "1rem",
          marginRight: "5px",
        }}
      />
      Buscar...
    </SearchBarStyled>
  );
};

export default SearchBar;

const SearchBarStyled = styled.div`
  width: calc(100% - 2.4rem);
  height: 2.2rem;
  border-radius: 30px;
  /* background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--whiteColor)"}; */
  border: 1px solid
    ${(props) =>
      props.tema === "dark" ? "var(--Border)" : "var(--BorderLight)"};
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.127) 0px 2px 8px 0px;
  padding: 0 1rem;
  font-size: 0.8rem;
  /* box-shadow: 0 2px 8px -5px var(--Item); */
  color: ${(props) =>
    props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
`;
