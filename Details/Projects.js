import React from 'react'
import '../CssFile/Projects.css'
import {BsCodeSlash} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate=useNavigate();
  const HandleClickBackButton=()=>
  {
    navigate(-1)
  }

  return (
    <div >
        <div className='ProjectHeading'>
        <button onClick={HandleClickBackButton} className="backone" >< BiArrowBack style={{width:"25px",height:"25px",color:"white"}} /></button>
        <h1 className='Works'><b>W O R K S</b></h1>
        <h1 className='myPortfolio'><b className='my'>MY </b><b className='portfolio'>PORTFOLIO</b> </h1><br/><br/>
        <h1 className='Projects'><b>ALL PROJECTS</b></h1>

        <div className='ProjectImage'>
            <a href='https://gotimesports.com/login'>
        <button style={{borderRadius:"30px",borderColor:"white"}}><img src='https://development.gotimesports.com/static/media/logo1.58c3898b28673211bc991ead8a9899ce.svg' width="250px" height="200px"/></button>
        </a>
        </div>
        </div>
       
    </div>
  )
}

export default Projects