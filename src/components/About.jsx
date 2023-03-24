import React from 'react'
import logo from '../assets/abouttop.svg'
import abt from '../assets/about.png'
import arrow from '../assets/arrow.png'
const About = () => {
  return (
    <div className='flex flex-row justify-between items-center mt-20 w-full h-3/4 mb-20' id='about'>
    <div className='flex flex-col justify-between mx-20'>
       <img src={logo} alt='about us' className='w-[500px] h-[100px]'/>
       <p className='text-primary font-bold font-[24px] mt-2'>Who are we ?</p>
       <p className='text-[25px]'>We are your digital partner for innovative design<br/>and reliable Web , Mobile and Marketing solutions</p>
       <p className='text-[20px] text-[#585858] mt-3'>The top-notch and preeminent Web and Mobile App Development <br/>Company of India with its global presence in USA, Mind Inventory is<br/> first-rate choice of the clients worldwide. With sheer customer<br/> satisfaction in mind, we are profoundly dedicated to developing<br/> highly intriguing apps that strictly meet the business requirements<br/> and catering a wide spectrum of projects.</p>
       <button type='button' className=' mx-10 text-white bg-primary px-6 py-3 hover:bg-secondary hover:text-primary text-bold w-1/4 mt-10 flex flex-row items-center'>Contact us &nbsp; <img src={arrow}/></button>
    </div>
    <div>
     <img src={abt} alt='aboutpng' className='w-[500px] h-full mx-20'/>
    </div>
    </div>
  )
}

export default About