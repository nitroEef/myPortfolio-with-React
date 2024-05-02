import React from 'react'
import './HeroSection.css';
import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRightLong, FaTwitter, FaUser } from 'react-icons/fa6';
import { FaBook, FaBookOpen } from 'react-icons/fa';

const HeroSection = () => {
  
  
  return (
   

    <div className='imageAndText'>
        <div className='threeTexts'>
   
    <h2 className='intro'>Hello, I am!</h2>
    <h3 className='introTwo'>Ogbeni NitroEef</h3>
    <h4 className='introThree'>a professional web developer and UI/UX designer</h4>
<div className='buttonguys'>
    <button className=' btn resume'>  My Resume</button>
    {/* <button className='btn myWork'> Contact Me</button> */}
    

    <div className='myIcons'>
      <FaGithub className='git' />
      <FaLinkedin className='lin' />
      <FaFacebook className='fac' />
      <FaTwitter className='twi' />
      <FaInstagram className='ins' />
    </div>
 

 </div>


    </div>

<div className='quotebox'>
  <p className='thequote'>'''It is not that we use technology, we live technology.'</p>
  <cite>   Godfrey Reggio </cite>
  </div>   
    
    </div>
  )
}

export default HeroSection
