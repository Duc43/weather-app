import React from 'react'

const TimeWeather = ({image, time, temp} : {image?:string, time:Date, temp:number}) => {

  const tim = new Date(time)
  const hour = tim.getHours();
  return (
    <div className='flex flex-col items-center rounded-lg bg-component text-white text-sm py-2 font-semibold'>
        <p>{hour}:00</p>
        <img src={image} alt="" className='w-3/5 mb-2'/>
        <p>{temp}°</p>
    </div>
  )
}

export default TimeWeather