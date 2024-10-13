import React from 'react'

const NextDay = ({day, date, icon, text, temp} : {day:string, date:string, icon:string, text:string, temp:number}) => {
  return (
    <>
        <div className='flex items-center text-white bg-component rounded-xl mt-3 px-5 gap-2'>
            <div className='flex items-start flex-col basis-56 relative'>
              <span className='absolute right-2 top-4 text-xs text-slate-300'>{date}</span>
              <h2>{day} </h2>
              <p className='text-slate-300'>{text}</p>
            </div>
            <img src={icon} alt=""/>
            <p>{temp}°</p>
        </div>
    </>
  )
}

export default NextDay