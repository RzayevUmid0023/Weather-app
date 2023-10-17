import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const key = '1ec87747f226e9bd7b281307ac58d909';
  const [city ,setCity] = useState('') ;
  const [data ,setData] = useState(null);
 
  useEffect(() => {
    async function Weather() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
        console.log(response);
          setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    Weather();
  }, [city]);
  

  return (
    <>

      <div className='content'>
      <input type='text' onChange={(e)=>{setCity(e.target.value)}}/>
          <h1>{data ? `Weather temp : ${data.main.temp} °C` : "Veriler yükleniyor..."}</h1>
          <h1>{data ? `Wind speed : ${data.wind.speed}` : "Veriler yükleniyor..."}</h1>
      </div>
           
  
    <div className='opacity'></div>
        
      
    </>
    )
}

export default App;
