import React from 'react'
import './About.css';
import { yu } from '../../assets';

const Aboutme = () => {
  return (
    <div className='forabout' id='About-me'>

        <h1 className='aboutme'> About Me</h1>
        <div className="aboutpix">
     <p className='ogbeni'> Hello, I'm Ogbeni NitroEeF, a passionate and innovative web developer/designer,
        dedicated to creating user-friendly and engaging visual and functional experiences.
        i am mptivated by a desire to make a meaningful impact through design and a fascination
        with human-centered technology. 

        With a foundation in Aesthetics and well establishrd interaction in front end development
        , i bring a unique and functional perspective to design that combines creativity with technical expertise.
        outside of design, you can find me playing indoor games like scrabble, pes /dreamleague
     or surfing the net, probably dabbling in emerging design tools and technologies 
     </p>


     <img className='firstImage'src={yu} alt="bb" /> 
     </div>
    </div>
  )
}


export default Aboutme
