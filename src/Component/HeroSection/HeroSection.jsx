import React from 'react'
import './HeroSection.css';
import { bb } from '../../assets';

const HeroSection = () => {
  return (
    <div>
    <p><span className='intro' >Hi, I'm nitroEef</span>
    a web developer with a passion for digital innovation,
    crafting exceptional user experience , wich focus on delivering
    top-notch solutions that meets the client needs </p>

    <img src={bb} alt="bb" />
   
    
    </div>
  )
}

export default HeroSection
