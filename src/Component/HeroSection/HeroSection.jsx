import React from 'react'
import './HeroSection.css';
import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

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
    <FaGithub/> <FaLinkedin/> <FaFacebook/> <FaTwitter/> <FaInstagram/>  
    </div>
 </div>


    </div>

<div className='quotebox'>
  <p className='thequote'>'''Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem nisi excepturi ratione mollitia beatae enim odit sint possimus esse, 
  ea labore ullam alias molestiae repellendus harum architecto. Ipsa, eaque?'''</p>
  </div>   
    
    </div>
  )
}

export default HeroSection
