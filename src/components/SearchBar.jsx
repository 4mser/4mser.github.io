import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

const SearchBar = ({ tema }) => {
  return (
    <Container>
      <SearchBarStyled tema={tema}>
        <Icon
          icon="basil:search-solid"
          style={{
            fontSize: "1.2rem",
            marginRight: "5px",
          }}
        />
        Buscar...
      </SearchBarStyled>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  padding: 1.2rem;
`;

const SearchBarStyled = styled.div`
  width: 100%;
  margin-top: 3.5rem;
  height: 3rem;
  border-radius: 10px;
  /* background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--whiteColor)"}; */
  border: 1px solid
    ${(props) =>
      props.tema === "dark" ? "var(--Border)" : "var(--BorderLight)"};
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.127) 0px 2px 10px -3px;
  padding: 0 1rem;
  font-size: 0.8rem;
  /* box-shadow: 0 2px 8px -5px var(--Item); */
  color: ${(props) =>
    props.tema === "dark" ? "var(--textLight)" : "var(--Item)"};
`;
