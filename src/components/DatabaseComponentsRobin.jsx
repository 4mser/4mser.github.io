import React from "react";
import cantidad_visitas from "./cantidad_visitas.jsx";
import BarChart from "./BarChart.jsx";

const DatabaseComponentRobin = () => {
  const sortedVisitas = cantidad_visitas.sort(
    (a, b) => b.cantidad_visitas - a.cantidad_visitas
  );

  const first10Visitas = sortedVisitas.slice(0, 10);

  return (
    <div style={{ paddingTop: "9rem" }}>
      <h2>Tabla de Visitas Florales</h2>
      <table>
        <tbody>
          {first10Visitas.map((visita, index) => (
            <tr key={index}>
              <td>{visita.familia_visitante}</td>
              <td>{visita.familia_visitada}</td>
              <td>{visita.cantidad_visitas}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Gráfico de Barras</h2>
      <BarChart data={first10Visitas} />
    </div>
  );
};

export default DatabaseComponentRobin;
