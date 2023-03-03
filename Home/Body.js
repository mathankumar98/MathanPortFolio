import React from 'react'
import '../CssFile/RightNav.css';
import {HiArrowSmRight} from 'react-icons/hi'
import Images from "../Images/Mathan2.jpg"
import { useNavigate } from 'react-router-dom';



function Body() {

  const navigate=useNavigate();

 const HandleClick=()=>
 {
  console.log("Mathan")
  navigate("/About")

 }  


  return (
    <div className='body1'>
      <div className='container-lg   py-5  p-5 px-5 continers' style={{backgroundColor:"#323232"}} >
      <div className='row' >
        <div className='col-lg-4 px-5  Images' style={{color:"white"}}><img src={Images} alt="HomeImage" style={{borderRadius:"20px"}} className="imageBody"/></div>
        <div className='col-lg-6 pt-5 px-5 col-12 Coloumn2'><h1><b>HI, I'M MATHAN KUMAR.</b></h1>
        <h1 style={{color:"rgb(255, 160, 1)"}}><b>WEB DEVELOPER</b></h1>
        <p><b>I'm a Indian based front‑end developer focused on crafting clean<br/> & user‑friendly experiences, I am passionate about building<br/> excellent software that improves the lives of those around me.</b></p>
         <button style={{borderRadius:"35px",height:"50px",backgroundColor:"rgb(255, 160, 1)",color:"white",borderColor:"#323232"}} onClick={HandleClick} ><b>MORE ABOUT ME</b></button> 
        </div>
      </div>
      </div>
      </div>
  )
}

export default Body