import React from 'react'
import phone from '../assets/phone.png'
import locate from '../assets/locate.png'
import msg from '../assets/msg.png'
import logo from '../assets/Kds2.png'
import {fifth, first, fourth, second, sixth, third} from '../assets/socials'
const Footer = () => {
  return (
    <div className='bg-tertiary w-full mt-10 p-10 flex flex-col justify-between items-center'>
    <div className='h-full w-full flex flex-row justify-between items-center px-5'>
    <img src={logo} alt={logo}/>
     <div className='flex flex-row justify-between items-center'>
     <img src={locate} alt="logo" className='w-[20px] h-[20px]'/> 
     <p className='mx-3 text-white flex flex-row'>G-9,First Floor, Sector 63,Noida &nbsp;|&nbsp; &nbsp;<span><img src={msg} alt="logo" className='w-[20px] h-[20px]'/></span>&nbsp; Shubham@Khusheldigi.com &nbsp;|&nbsp; &nbsp; <img src={phone} alt="logo" className='w-[20px] h-[20px]'/> &nbsp; 9045301702</p>
     </div>
    </div>
    <div className='flex flex-col justify-between items-center mt-4'>
    <p className='font-bold text-[24px] text-white'>Follow us on</p>
     <ul className='list-none flex flex-row justify-between items-center gap-3 mt-5'>
        <li><img src={first}/></li>
        <li><img src={second}/></li>
        <li><img src={third}/></li>
        <li><img src={fourth}/></li>
        <li><img src={fifth}/></li>
        <li><img src={sixth}/></li>
     </ul>
    </div>
    </div>
  )
}

export default Footer