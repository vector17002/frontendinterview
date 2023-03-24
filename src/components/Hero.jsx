import React from 'react'
import hero from '../assets/female.png'
import logo1 from '../assets/Layer 1 2.png';
import logo2 from '../assets/magento.png'
import logo3 from '../assets/shopify.png'
import logo4 from '../assets/woo.png'

const Hero = () => {
  return (
    <div className='bg-[#D8D8FF] w-full h-full flex flex-row justify-between items-center p-[20px]'>
    <div className='flex flex-col justify-between mx-auto'>
      <p className='text-gray text-[20px]'>Welcome to Khushel digi</p>
      <p className='font-bold text-[40px]'>Revolutionalising your buisiness <br/> through technology</p>
      <p className='text-[#585858] mt-8 text-[18px]'>We are E-commerce Expert</p>
      <ul className='flex flex-row justify-between items-center list-disc text-[#585858] font-bold mt-[20%] text-[20px]'>
          <li>Shopify</li>
          <li>Woo Commerce</li>
          <li>Big Commerce</li>
          <li>Magento</li>
      </ul>
    </div>
    <div className='flex flex-row w-1/2 justify-center'>
    <div className='flex flex-col justify-center items-center'>
        <img src={logo3} alt='logo1' className='w-[60px] h-[60px] rounded-full m-[20px]'/>
       <img src={logo1} alt='logo1' className='w-[60px] h-[60px] rounded-full m-[20px]'/>
       <img src={logo2} alt='logo1' className='w-[60px] h-[60px] rounded-full m-[20px]'/>
       <img src={logo4} alt='logo1' className='w-[60px] h-[60px] rounded-full m-[20px]'/>
    </div>
       <img src={hero} alt='hero image' className='relative h-[500px]'/>
    </div>
    </div>
  )
}

export default Hero