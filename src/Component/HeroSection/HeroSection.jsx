import React from 'react'
import './HeroSection.css';
import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRightLong, FaTwitter, FaUser } from 'react-icons/fa6';
import { FaBook, FaBookOpen } from 'react-icons/fa';

const HeroSection = () => {
  
  
  return (
   

    <div className='imageAndText'>
        <div className='threeTexts'>
   
    <h2 className='introbox'>Hello, I am!</h2>
    <h3 className='introOgbeni'>Olabode Ajibade</h3>
    <h4 className='introweb'>a professional web developer and UI/UX designer</h4>
    <button className=' btn resume'>  My Resume</button>
    

    <div className='myIcons'>
      <FaLinkedin className='lin' />
      <FaFacebook className='fac' />
      <FaGithub className='git' />
      <FaTwitter className='twi' />
      <FaInstagram className='ins' />
    </div>
    </div>

<div className='quotebox'>
  <p className='quotext'>'''It is not that we use technology, we live technology.'</p>
  <cite>   Godfrey Reggio </cite>
  </div>   
    
    </div>
  )
}

export default HeroSection
