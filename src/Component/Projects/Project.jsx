import React from 'react'
import './Project.css'
import { download } from '../../assets';
import { downloaded } from '../../assets';
// import { FaAirbnb, FaFaceKissWinkHeart, FaPiggyBank } from 'react-icons/fa6';



const Project = () => {
  return (

    <div className="eefqqqd">
<h1 className='mypro'> Projects </h1>
    <div className='container'>
     

      <div className="card--container">
          <article className="card--article">
          <img className='card-image'src={download} alt="bb" /> 
          <div className="card--data">
               <span className="card--description">1.   </span>
                    <h2 className='card-title'> Hostel Management</h2>
                    <a href='https://github.com/nitroEef' className='card--button'> Check it out</a>
             
          </div>
          </article>

          <article className="card--article">
          <img className='card-image'src={download} alt="bb" /> 
          <div className="card--data">
               <span className="card--description"> 2. </span>
                    <h2 className='card-title'>Tic Tac Toe </h2>
                    <a href='#' className='card--button'> Check it Out</a>
             
          </div>
          </article>

          
          <article className="card--article">
          <img className='card-image'src={download} alt="bb" /> 
          <div className="card--data">
               <span className="card--description">3. </span>
                    <h2 className='card-title'>EasyBank Webpage</h2>
                    <a href='#' className='card--button'> Check it Out </a>
             
          </div>
          </article>

          
          <article className="card--article">
          <img className='card-image'src={download} alt="bb" /> 
          <div className="card--data">
               <span className="card--description"> 4. </span>
                    <h2 className='card-title'>Scramble Word Game</h2>
                    <a href='#' className='card--button'> Check it Out</a>
             
          </div>
          </article>

          
          <article className="card--article">
          <img className='card-image'src={download} alt="bb" /> 
          <div className="card--data">
               <span className="card--description"> 5. </span>
                    <h2 className='card-title'>Quote Generator</h2>
                    <a href='#' className='card--button'> Check it Out</a>
             
          </div>
          </article>

          
          <article className="card--article">
          <img className='card-image'src={download} alt="bb" /> 
          <div className="card--data">
               <span className="card--description"> 6. </span>
                    <h2 className='card-title'>easy</h2>
                    <a href='#' className='card--button'> Check it Out </a>
             
          </div>
          </article>

        
      </div>
 
           
</div>
 <div className="githublink"> <a href=''>Check my Github to See More</a> </div>
</div>
  )
}

export default Project
