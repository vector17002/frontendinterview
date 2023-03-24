import React from 'react'
import { testicon , testmain } from '../assets/socials'
const Testimonials = () => {
  return (
    <div className='bg-[#D8D8FF] w-full h-full flex flex-col justify-between items-center p-[20px]'>
        <div className='flex flex-col mt-10 justify-center items-center'>
            <p className='text-[#585858] text-[20px] font-bold'>TESTIMONIALS</p>
            <p className='font-bold text-[30px]'>OUR HAPPY CLIENT SAY</p>
        </div>
        <div className='flex flex-row justify-between items-center px-10'>
         <div className='flex flex-col justify-between px-10'>
          <p><img src={testicon}/></p>
          <p className='font-bold text-[#585858] text-[16px] mt-3'>Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry’s standard dummy text ever since the 1500s, an unknown printer took a gallery.</p>
          <h1 className='text-[30px] mt-4'>Harriet Mitchell</h1>
          <p className='text-[20px] mt-2 text-[#585858] font-bold'>Director of inbrew</p>
         </div>
         <div className='mt-10 mb-10'>
         <img src={testmain}/>
         </div>

        </div>
    </div>
  )
}

export default Testimonials