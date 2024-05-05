import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="mygmail">
        <h1 className='get'>Where you can get in touch</h1>
        <h2 className='mymail'> ajibadelateef17@gmail.com</h2>
        <h3 className='mynumber'>+2348136340736</h3>
      </div>

      
        
        <div className='myIcons'>
      <FaGithub className='git' />
      <FaLinkedin className='lin' />
      <FaFacebook className='fac' />
      <FaTwitter className='twi' />
      <FaInstagram className='ins' />
    </div>
    </div>
  )
}

export default Footer
