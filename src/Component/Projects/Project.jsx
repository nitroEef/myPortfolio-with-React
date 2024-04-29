import React from 'react'
import './Project.css'
import { download } from '../../assets';
import { downloaded } from '../../assets';


const Project = () => {
  return (

    
    <div className='myProject'>
      <h3 className='pro'>My Project</h3>

        <div className='container'>
                <div className="box ">
                <div className='imageWord'>
                <p className='easyBank'> 1. EasyBank Web Page</p>
                <img className='easypix'src={download} alt="bb" /> 
                     </div>


                </div>

               
     <div className="box ">
                    <div className='imageWord'>
                    <p className='easyBank'> 2. Quote Generator </p>
     <img className='easypix'src={downloaded} alt="bb" /> 
                     </div>


                </div>

                <div className="box ">
                    <div className='imageWord'>
                    <p className='easyBank'> 3.Quote Generator</p>
     <img className='easypix'src={download} alt="bb" /> 
                     </div>


                </div>


                <div className="box ">
                    <div className='imageWord'>
                    <p className='easyBank'> 1. EasyBank Web Page</p>
     <img className='easypix'src={download} alt="bb" /> 
                     </div>


                </div>


                <div className="box ">
                    <div className='imageWord'>
                    <p className='easyBank'> 1. EasyBank Web Page</p>
     <img className='easypix'src={download} alt="bb" /> 
                     </div>


                </div>

                <div className="box ">
                    <div className='imageWord'>
                    <p className='easyBank'> 1. EasyBank Web Page</p>
     <img className='easypix'src={download} alt="bb" /> 
                     </div>


                </div>            
           

    </div>
    </div>
  )
}

export default Project
