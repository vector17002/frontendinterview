import React from 'react'
import arrow from '../assets/arrow.png'
const ServiceCard = ({elements , headicon , heading}) => {
  return (
    <div className='flex flex-col justify-between bg-white w-full h-[500px] rounded-xl px-7 py-4'>
         <div className='flex flex-row items-center justify-between m-3'>
            <img src={headicon} alt='headicon' className='w-[35px] h-[70px] object-contain mx-2'/>
            <p className='font-bold text-[22px] mx-2'>{heading}<br/> Development</p>
         </div>
         <ul className='list-none flex flex-col'>
          {elements.map((element)=>(
            <li className='flex flex-row gap-2 m-3 font-bold'><img src={element.icon} alt='icon'/>{element.name}</li>
          ))}
         </ul>
         <button type='button' className='text-white bg-primary hover:bg-secondary px-6 py-3 hover:text-primary text-bold mt-10 rounded-xl flex flex-row items-center justify-between'>Read more<img src={arrow}/></button>
    </div>
  )
}

export default ServiceCard