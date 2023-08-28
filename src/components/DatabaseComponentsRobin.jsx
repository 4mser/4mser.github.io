import React from "react";
import cantidad_visitas from "./cantidad_visitas.jsx"; // Importar el arreglo desde el archivo generado

const DatabaseComponentRobin = () => {
  const sortedVisitas = cantidad_visitas.sort(
    (a, b) => b.cantidad_visitas - a.cantidad_visitas
  );

  return (
    <div style={{ paddingTop: "9rem" }}>
      <h2>Tabla de Visitas Florales</h2>
      <table>
        <thead>
          <tr>
            <th>Familia Visitante</th>
            <th>Familia Visitada</th>
            <th>Cantidad de Visitas</th>
          </tr>
        </thead>
        <tbody>
          {sortedVisitas.map((visita, index) => (
            <tr key={index}>
              <td>{visita.familia_visitante}</td>
              <td>{visita.familia_visitada}</td>
              <td>{visita.cantidad_visitas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseComponentRobin;
