import React from 'react'
import logo from '../assets/Kds logo 1.png'
const Navbar = () => {
  return (
    <div className='sticky top-0 w-full h-[80px] bg-secondary border-gray-100 shadow-gray-50 flex flex-row justify-between items-center'>
       <div className='flex items-center justify-center mx-20'>
            <img src={logo} alt='logo' className='w-[230px] h-[60px] object-contain'/>
       </div>
       <div className='mx-5 flex flex-row justify-between items-center'>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
        <li className=' hover:text-primary text-[18px] font-medium cursor-pointer'><a href='#about'>About Us</a></li>
        <li  className=' hover:text-primary text-[18px] font-medium cursor-pointer'><a href='#services'>Services</a></li>
        <li  className=' hover:text-primary text-[18px] font-medium cursor-pointer'><a href='#portfolio'>Our Portfolio</a></li>
        <li  className=' hover:text-primary text-[18px] font-medium cursor-pointer'><a href='#blog'>Blog</a></li>
        <li  className=' hover:text-primary text-[18px] font-medium cursor-pointer'><a href='#'>Carrier</a></li>
        </ul>
        <button type='button' className=' mx-10 text-white bg-primary p-3 rounded-xl hover:bg-secondary hover:text-primary text-bold'>Contact us</button>
       </div>
    </div>
  )
}

export default Navbar