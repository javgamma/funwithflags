import React, { useEffect, useState } from 'react'
import CardFlag from './CardFlag';



const FlagsList = () => {
  const [flagsData, setFlagsData] = useState([]);

  const getFlagsData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      console.log(response);
      const data = await response.json();
      console.log(data);
      setFlagsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFlagsData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {flagsData.map((flag, i) => (
        <CardFlag key={i} flag={flag} />
      ))}
    </div>
  );
};

export default FlagsList;

