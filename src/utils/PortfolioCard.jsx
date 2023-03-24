import React from 'react'
import arrow from '../assets/arrow.png'

const PortfolioCard = ({image , name}) => {
  return (
    <div className='flex flex-col w-full h-full  bg-white rounded-xl'>
     <img src={image} className='w-full'/>
     <p className='font-bold text-[24px] text-[#585858] m-2'>{name}</p>
     <div className='flex flex-row justify-between items-center mx-3'>
     <p className='text-[20px]'>Lorem Ipsum is simply dummy</p>
     <button type='button' className='bg-primary p-5 rounded-full hover:bg-tertiary'> <img src={arrow}/></button>
     </div>
    </div>
  )
}

export default PortfolioCard