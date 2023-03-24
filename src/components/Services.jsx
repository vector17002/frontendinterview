import React from 'react'
import ServiceCard from '../utils/ServiceCard'
import { appdevelopmment, drupal, ecommerce, laravel, php, web, word } from '../assets/services'
import {android, apple, flutter, kotlin, native ,woo , bigcommerce,shopify,magento} from '../assets/services'
const appdevelopment = [
  {
    name:'Android',
    icon:android,
  },
  {
    name:'IOS',
    icon:apple,
  },
  {
    name:'Flutter',
    icon:flutter,
  },
  {
    name:'React Native',
    icon:native,
  },
  {
    name:'Kotlin',
    icon:kotlin,
  },
]
const webdevelopment = [
  {
    name:'PHP',
    icon:php,
  },
  {
    name:'Drupal',
    icon:drupal,
  },
  {
    name:'Wordpress',
    icon:word,
  },
  {
    name:'Laravel',
    icon:laravel,
  },
]
const Ecommerce = [
  {
    name:'Shopify',
    icon:shopify,
  },
  {
    name:'Big Commerce',
    icon:bigcommerce,
  },
  {
    name:'Woo Commerce',
    icon:woo,
  },
  {
    name:'Magento',
    icon:magento,
  },
]
const Services = () => {
  return (
    <div className='w-full h-full bg-[#F2F0F0] flex flex-col justify-between items-center p-10' id='services'>
   <div className='flex flex-col justify-between items-center'>
       <h1 className='text-[44px]'><span className='font-bold'>Our </span> Services</h1>
       <p className='text-[20px]'>We employ quality design and development techniques as a foundation for the<br/> structured and systematic rapid development of cutting-edge technology solutions.</p>
   </div>
   <div className='flex flex-row justify-between items-center gap-20 mt-20'>
      <ServiceCard elements={appdevelopment} headicon={appdevelopmment} heading='App'/>
      <ServiceCard elements={webdevelopment} headicon={web} heading='Web'/>
      <ServiceCard elements={Ecommerce} headicon={ecommerce} heading='E-commerce'/>
   </div>
    </div>
  )
}

export default Services