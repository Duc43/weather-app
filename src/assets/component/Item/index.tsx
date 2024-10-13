import React from 'react'

const Item = ({icon, value, label, unit} : {icon:React.ReactNode, value:string, label:string, unit?:string}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className='text-xl mb-1'>{icon}</div>
        <h2 className='text-sm font-semibold'>{value}{unit}</h2>
        <p className='text-sm text-white/90'>{label}</p>
    </div>
  )
}

export default Item