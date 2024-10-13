import React, { useEffect } from 'react'
import NextDay from '../component/NextDay'
import { FaArrowLeft } from "react-icons/fa";

const getDayOfWeek = (dateString: string) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    const dateIndex = date.getDay();
    return daysOfWeek[dateIndex];
}

const NextDaysPage = ({returnClick ,data}) => {
 console.log(data)
    const [weatherData, setWeatherData] = React.useState(null);

    // const getData = async () => {
    //     try {
    //         const url = 'http://api.weatherapi.com/v1/forecast.json?key=d3f4fd20ac544695a7c35828240610&q=Da+nang&days=7&aqi=no&alerts=no';
    //         const options = {}
    //         const respone = await fetch(url, options);
    //         const result = await respone.json(); 

            
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }

    useEffect(()=>{
        setWeatherData(data.forecast.forecastday);
    }, []);

  return (
    <>
        <div className='relative z-10 py-10 px-5'>
            <button className='text-xl my-2 rounded-full p-1 hover:bg-slate-600' onClick={returnClick}><FaArrowLeft /></button>
            <div>
                {
                    weatherData && weatherData.map((data, index)=>(<NextDay key={index} day={getDayOfWeek(data.date)} date={data.date} icon={data.day.condition.icon} text={data.day.condition.text} temp={data.day.avgtemp_c}></NextDay>))
                }
            </div>
        </div>
    </>
  )
}

export default NextDaysPage