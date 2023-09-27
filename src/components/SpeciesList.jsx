import React, { useState, useEffect } from "react";
import axios from "axios";

function SpeciesList() {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await axios.get(
          "https://entropia-back-end.onrender.com/api/species?limit=10&offset=0"
        );
        setSpecies(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchSpecies();
  }, []);

  return (
    <div>
      <h1>Listado de Especies</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {species.map((specie) => (
            <li key={specie.id}>{specie.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SpeciesList;
