import React from 'react'
import '../CssFile/About.css'
import {BiArrowBack} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


function About() {

  const navigate=useNavigate();

const HandleClickBackButton=()=>
{
  navigate(-1)
}
const HandleClickSkill=()=>
{
  navigate('./Skills')
}

const handleClickAbout1=()=>
{
  navigate('./About1')
}
const HandleClickContact=()=>
{
  navigate('./Contact')
}
const HandleClickProjects=()=>
{
  navigate("./Projects")
}
  return (
    <div className='MainBox'>
    <div className='container  BigBox1' style={{width:"700px"}}>
          <div className='container'>
            <br/>
          <button onClick={HandleClickBackButton} style={{borderRadius:"50px",backgroundColor:"#242526",cursor:"pointer",width:"55px",height:"55px"}}>< BiArrowBack style={{width:"25px",height:"25px",color:"white"}} /></button>
          </div>   
          <br/>
          <br/>
          <div className='conatiner-sm pt-3 p-5 FirstContainer'>
          <button className='skills' onClick={HandleClickSkill} ><b>SKILLS</b></button><br/>
          <button className='projects' onClick={HandleClickProjects}   ><b>PROJECTS</b></button>
          </div>
          <div className='conatiner pt-5 p-5 SecoundContainer'>
          <button className='about' onClick={handleClickAbout1} ><b>ABOUT</b></button><br/>
          <button className='contact1' onClick={HandleClickContact} ><b>CONTACT</b></button>
          </div>
        {/* <div >
          <div className='AboutFooter'>
          <h3>Phone</h3>
          <h3>Email</h3>  
          <h3>Follow Me</h3>
          </div>
          <div className='AboutFooter1'>
            <p>6380558152</p> 
            <p>krishmathan12345@gmail.com</p>
            <p><AiFillLinkedin/></p>
          </div>

        </div> */}
    </div>
    </div>
  )
}

export default About