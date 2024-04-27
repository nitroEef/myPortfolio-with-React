import React from 'react'
import './HeroSection.css';
import { btt } from '../../assets';

const HeroSection = () => {
  return (
    <div className='imageAndText'>
        <div className='threeTexts'>
   
    <h2 className='intro'>Hello, I am!</h2>
    <h3 className='introTwo'>Ogbeni NitroEef</h3>
    <h4 className='introThree'>a professional web developer and UI/UX designer</h4>
<div className='buttonguys'>
    <button className='btn resume'> Resume</button>
    <button className='btn myWork'> My Work</button>
 </div>


    </div>

     <img className='firstImage'src={btt} alt="bb" /> 
   
    
    </div>
  )
}

export default HeroSection
