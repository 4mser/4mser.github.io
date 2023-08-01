import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Perfil = () => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div style={{ paddingTop: "10rem" }}>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Cerrar Sesión</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
      )}

      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          {/* <JSONPretty data={user} /> */}
        </div>
      )}
    </div>
  );
};

export default Perfil;
