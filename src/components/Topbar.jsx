import React from 'react'
import locate from '../assets/locate.png'
import msg from '../assets/msg.png'
import phone from '../assets/phone.png'

const Topbar = () => {
  return (
    <div className='h-full w-full bg-primary flex flex-row justify-between items-center px-5'>
     <div className='flex flex-row justify-end items-center'>
     <img src={locate} alt="logo" className='w-[20px] h-[20px]'/> 
     <p className='mx-3 text-white flex flex-row'>G-9,First Floor, Sector 63,Noida &nbsp;|&nbsp; &nbsp;<span><img src={msg} alt="logo" className='w-[20px] h-[20px]'/></span>&nbsp; Shubham@Khusheldigi.com &nbsp;|&nbsp; &nbsp; <img src={phone} alt="logo" className='w-[20px] h-[20px]'/> &nbsp; 9045301702</p>
     </div>
     <div className='text-white'>
      <p>Open 24 Hours</p>
     </div>
    </div>
  )
}

export default Topbar