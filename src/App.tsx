import React, { useEffect } from 'react';
import './App.css'
import CurrentWeatherPage from './assets/layout/CurrentWeatherPage'
import NextDaysPage from './assets/layout/NextDaysPage';
// import NextDaysPage from './assets/layout/NextDaysPage'


function App() {
  const [data, setData] = React.useState();
  const [nextDaysBtn, setNextDaysBtn] = React.useState(false);

  const getCurrentForecast = async () => {
    try{
      const url = 'http://api.weatherapi.com/v1/forecast.json?key=d3f4fd20ac544695a7c35828240610&q=da+nang&days=7&aqi=no&alerts=no';
      const options = {};
      const respone = await fetch(url, options);
      const result = await respone.json();
      
      setData(result);
    } catch (e){
      console.error('Error fetching data:', e);
    }
  }

  const onHandleNextDaysBtn = () => {
    setNextDaysBtn(!nextDaysBtn)
  }
  
  useEffect( ()=>{
      getCurrentForecast();
  }, []);

  if (!data) 
    return <div>Loading...........</div>

  return (
    <>
      <div className='w-full h-screen fixed'>
          <div className='relative w-[417px] max-h-[872px] mx-auto mt-10 rounded-3xl shadow-2xl bg-[url("./assets/images/bg.png")]'>
            <div className='bg-theme absolute inset-0 rounded-3xl opacity-80'></div>
            {!nextDaysBtn ? <CurrentWeatherPage data={data} nextDaysBtn={onHandleNextDaysBtn}></CurrentWeatherPage> : <NextDaysPage returnClick={onHandleNextDaysBtn} data={data}/>}
        </div> 
      </div> 
    </>
  )
}

export default App
