import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="mygmail">
        <p className='get'>Where you can get in touch</p>
        <p className='mymail'>  ajibadelateef17@gmail.com</p>
        <p className='mynumber'><FaWhatsapp/> +2348136340736</p>
      </div>


      
        <div className='linkandtext'>
          <p className='soc'>My Social Links</p>
        <div className='myIcons'>
      <FaGithub className='git' />
      <FaLinkedin className='lin' />
      <FaFacebook className='fac' />
      <FaTwitter className='twi' />
      <FaInstagram className='ins' />
    </div>
    </div>


    <div className='copyrighted'>
      <p className='copyright ing'>&copy;copyright 2024</p>
      <p className='copyright eede'>Olabode Ajibade</p>


      </div>
    </div>
  )
}

export default Footer
