import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          {
            data: data.map((item) => ({
              x: item.familia_visitante,
              y: item.familia_visitada,
              r: item.cantidad_visitas, // Tamaño del punto basado en la cantidad de visitas
            })),
            pointStyle: "circle", // Estilo de los puntos
            backgroundColor: "rgba(75, 192, 192, 0.7)", // Color de los puntos
            borderColor: "rgba(75, 192, 192, 1)", // Borde de los puntos
            hoverBackgroundColor: "rgba(75, 192, 192, 0.9)", // Color al pasar el mouse
            hoverBorderColor: "rgba(75, 192, 192, 1)", // Borde al pasar el mouse
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category",
            title: {
              display: true,
              text: "Familia Visitante",
            },
          },
          y: {
            type: "category",
            title: {
              display: true,
              text: "Familia Visitada",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const data = context.dataset.data[context.dataIndex];
                return `Familia Visitante: ${data.x}\nFamilia Visitada: ${data.y}\nCantidad de Visitas: ${data.r}`;
              },
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} width={800} height={400}></canvas>
    </div>
  );
};

export default BarChart;
