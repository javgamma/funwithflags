import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardFlag = ({ flag }) => {
  const navigate = useNavigate();

  if (!flag || !flag.flags || !flag.flags.png) return null;

  const handleMoreClick = () => {
    navigate(`/country/${flag.cca3}`);
  };

  return (
    <div className='flex flex-wrap p-4 border border-gray-300 rounded-md m-2'>
      <img src={flag.flags.png} alt={`Bandera de ${flag.name.common}`} className="w-32 h-20 object-cover"/>
      <div className='ml-4'>
        <h1 className="text-xl font-semibold">{flag.name.common}</h1>
        <p><strong>Población:</strong> {flag.population.toLocaleString()}</p>
        <p><strong>Región:</strong> {flag.region}</p>
        <p><strong>Capital:</strong> {flag.capital ? flag.capital[0] : 'N/A'}</p>
        <button onClick={handleMoreClick} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          More
        </button>
      </div>
    </div>
  );
};

export default CardFlag;

