import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

  const Header = () => {
    return (
      
        <header>
          <h3 className='nitro232eef'> nitro<span className='e'>E</span>ef</h3>
{/*             
            <div className="eefmenu232tag">
            {/* {items.map(({ tagName, url, i }) => (
            <div key={i}>
            </div>
          ))} */} 
          <div className='centerLink'>
          <ul>
            <li className='homed'><a href='#Home'>Home</a></li>
            <li><a href='#About-me'>About me</a></li>
            <li><a href='/'>Skills</a></li>
            <li><a href='/'>Projects</a></li>
            <li ><a href='/'> Contact Me</a></li>
        </ul>
        </div>
     
           
        </header>
       
  )
}

export default Header



