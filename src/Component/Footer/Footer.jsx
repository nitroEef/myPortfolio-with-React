import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        
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
