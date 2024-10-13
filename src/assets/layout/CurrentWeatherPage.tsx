import React, { useEffect } from 'react'
import { LuWaves } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { IoUmbrellaOutline } from "react-icons/io5";
import Item from '../component/Item';
import TimeWeather from '../component/TimeWeather';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";

const roundNumber = (value : number) => {
  return Math.round(value)
}

const CurrentWeatherPage = ({data, nextDaysBtn}) => {
  
  const [currentHourData, setCurrentHourData] = React.useState([]);
  const [startIndex, setStartIndex] = React.useState(0);
  const hoursView = 5;
  const total = currentHourData.length;
  
  //can use object instead
  
  useEffect(()=>{
    //set start hour 
    const currentTime = new Date(localtime); 
    const currentHour = currentTime.getHours();
    setStartIndex(currentHour)
    
    //get weather data of current day
    const forecastHours = data.forecast.forecastday[0].hour;
    setCurrentHourData(forecastHours);
  }, [])
  
  const {location, current} = data ;
  const {name, localtime} = location;
  const {temp_c, condition, wind_kph, precip_mm, humidity} = current;
  const {text, icon} = condition;

  const currentForecasts = currentHourData.slice(startIndex, startIndex + hoursView);

  const handleNext = () => {
    if (startIndex + hoursView < total)
      setStartIndex(startIndex + hoursView)
  }

  const handlePrev = () => {
    if (startIndex - hoursView > 0)
      setStartIndex(startIndex - hoursView)
  }

  return (
    <> 
      <div className='relative z-10 px-4 py-5'>
        <div className='text-center rounded-3xl pb-3 text-white'>
          <h2 className='text-2xl'>{name}</h2>
          <p className='text-sm text-white mt-5'>{text}</p>
          <img src={icon} alt="" className='mx-auto w-1/3'/>
          <h1 className='text-6xl font-bold my-5'>{roundNumber(temp_c)}°</h1>
          <p className='text-xs'>{localtime}</p>
          
          <div className='inline-block bg-component rounded-lg mt-3'>
            <div className='col flex items-center justify-around px-4 py-2 gap-5 '>
              <Item label='Precipitation' icon={<IoUmbrellaOutline />} value={precip_mm} unit='%'></Item>
              <Item label='Humidity' icon={<LuWaves />} value={humidity} unit='%'></Item>
              <Item label='Wind speed' icon={<FaWind />} value={wind_kph} unit='km/h'></Item>
            </div>
          </div>
        </div>

        <div className='text-white text-sm flex py-3 px-2 justify-between'>
          <p>Today</p>
          <button className='hover:underline' onClick={nextDaysBtn}>7-days next</button>
        </div>

        <div className='relative' >
          <button className='bg-component text-white py-2 text-lg absolute top-1/3' onClick={handlePrev}><FaAngleLeft /></button>
          <div className='flex justify-around px-5'>
            {
              currentForecasts.map((hour, index) => (
                <TimeWeather key={index} time={hour.time} image={hour.condition.icon} temp={roundNumber(hour.temp_c)}/>
              ))
            }
          </div>
          <button className='bg-component text-white py-2 text-lg absolute right-0 top-1/3' onClick={handleNext}><FaAngleRight /></button>
        </div>
      </div>  
    </>
  )
}

export default CurrentWeatherPage