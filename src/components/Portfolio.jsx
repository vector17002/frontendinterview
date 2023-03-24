import React from 'react'
import portfolio from '../assets/portfolioheading.png'
import { five, four, one, six, three, two } from '../assets/portfolio'
import PortfolioCard from '../utils/PortfolioCard'
import arrow from '../assets/arrow.png'
const projects = [
    {
        name:'www.kickeez.com',
        image:two
     },
    {
       name:'www.2ndammndment.com',
       image:one
    },
    {
       name:'www.interview.com',
       image: four
    },
    {
        name:'www.protruck.com',
        image:three
     },
]
const Portfolio = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full h-full bg-[#F2F0F0] pt-10' id='portfolio'>
     <div className='flex flex-col justify-between items-center'>
         <img src={portfolio} alt='heading'/>
         <p className='text-[24px] mt-8 font-bold'>OUR PORTFOLIO</p>
         <p className='text-[20px] mt-5 text-[#585858] items-center'>We design project designed with passion on time<br/>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;within budget of full value</p>
     </div>
     <div className='grid grid-rows-2 grid-flow-col gap-8 max-w-screen-xl items-center mt-5'>
      {projects.map((project)=>(
       <PortfolioCard image={project.image} name={project.name}/>
      ))}
     </div>
     <button type='button' className=' mx-10 text-white bg-primary px-6 py-3 hover:bg-secondary hover:text-primary text-bold rounded-xl mt-10 flex flex-row items-center font-bold'>View all projects &nbsp; <img src={arrow}/></button>
    </div>
  )
}

export default Portfolio