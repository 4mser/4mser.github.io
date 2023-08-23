import React, { useState, useEffect } from "react";

const useNasaAPI = () => {
  const [apodData, setApodData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAPOD = async (date) => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=0xCaQOqPvwGlOfIDZggRuRxU3xFMGQnQoJKTeHjS&date=${date}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching APOD:", error);
    }
  };

  const getPreviousDates = (numDays) => {
    const today = new Date();
    const dates = [];
    for (let i = 1; i <= numDays; i++) {
      const previousDate = new Date(today);
      previousDate.setDate(today.getDate() - i);
      dates.push(previousDate.toISOString().split("T")[0]);
    }
    return dates;
  };

  useEffect(() => {
    const previousDates = getPreviousDates(8);

    Promise.all(previousDates.map((date) => fetchAPOD(date))).then(
      (dataArray) => {
        setApodData(dataArray);
        setLoading(false);
      }
    );
  }, []);

  return { apodData, loading };
};

export default useNasaAPI;
