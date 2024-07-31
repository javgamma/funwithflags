import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  const getCountryData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
      const data = await response.json();
      setCountry(data[0]);
      console.log(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCountryData();
  }, [cca3]);

  if (error) return <div>Error: {error.message}</div>;
  if (!country) return <div>Loading...</div>;

  return (
    <div className='flex justify-center border w-[500px] items-center p-8 rounded-lg mt-6 m-20 bg-slate-300'>
    <div className="p-4 flex flex-col justify-center">
      <h1 className="text-3xl font-bold">{country.name.common}</h1>
      <p><strong>Nombre en idioma nativo:</strong> {Object.values(country.name.nativeName)[0].common}</p>
      <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Región:</strong> {country.region}</p>
      <p><strong>Subregión:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Monedas:</strong> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
      <p><strong>Idiomas:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Países con los que hace frontera:</strong> {country.borders ? country.borders.join(', ') : 'N/A'}</p>
    </div>
    </div>
  );
};

export default CountryDetail;

