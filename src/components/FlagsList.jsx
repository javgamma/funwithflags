import React from 'react'

const FlagsList = () => {
    const [flagsData, setFlagsData] = useState([]);
  
  
    const getFlagsData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setFlagsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    
    //Aqui debemos llamar a la funcion y colocarle un array vacio como segundo parametro
    useEffect(() => {
      getFlagsData();
    }, [])
    
    console.log(flagsData);
    



  return (
    <div>
       {flagsData.map((flag, index) => {
        return <Card key={index} character={item}/>;
      })}
    </div>
  )
}

export default FlagsList
