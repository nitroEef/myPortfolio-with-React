import React from 'react'
import './HeroSection.css';
import { bt } from '../../assets';

const HeroSection = () => {
  return (
    <div className='backgroundhero'>
    <div className='imageAndText'>
        <div className='twoTexts'>
   
    <p>Hi, I'm nitroEef</p>
    <h4>a web developer with a passion for digital innovation,
    crafting exceptional user experience , wich focus on delivering
    top-notch solutions that meets the client needs</h4>
    </div>

    <img src={bt} alt="bb" />
   
    
    </div>
    </div>
  )
}

export default HeroSection
