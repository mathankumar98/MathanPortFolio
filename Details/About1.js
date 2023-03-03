import React from 'react'
import '../CssFile/About1.css';
import {MdWork} from 'react-icons/md'
import {FaSchool} from "react-icons/fa"
import {MdSubject}from"react-icons/md"
import {DiJava}from"react-icons/di"
import {SiMysql}from"react-icons/si"
import {AiFillHtml5}from"react-icons/ai"
import {DiCss3}from"react-icons/di"
import {DiJavascript1}from"react-icons/di"
import {SiJava}from"react-icons/si"
import {BiArrowBack} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


function About1() {
  const navigate=useNavigate();

  const HandleClickBackButton=()=>
  {
    navigate(-1)
  }
  return (
    <div>
    <div className='container-fluid fullContainer'>
    <button onClick={HandleClickBackButton} className="backtwo" >< BiArrowBack style={{width:"25px",height:"25px",color:"white"}} /></button>
      <div className='headerContainer'>
      <h1><b  className="resume">RESUME</b></h1>
        <h1 className="aboutme"><b style={{color:"white"}} >ABOUT <b className='me'> ME</b></b></h1>
        </div>
        <div className='centerContainer'>
          <h1 className='personalinfo'><b>PERSONAL INFO :</b></h1>
          
          <div className='NamePinfo'>
            <h4 style={{}}><b>FirstName:</b>Mathan<b className='name'> LastName:</b>Kumar</h4>
          </div>
          <div className='NamePinfo1'>
            <h4 style={{}}><b>Age:</b> 25</h4>
          </div>
          <div className='NamePinfo2'>
            <h4 style={{}}><b>Phone:</b>6380558152  <b className='name2'> Email:</b>krishmathan12345@gmail</h4>
          </div>
          <div className='NamePinfo3'>
            <h4 style={{}}><b>Language:</b>English,Tamil,Hindi <b>LinkedIn:</b>linkedin.com/in/mathan-kumar-46b8b6223</h4>
          </div>
          </div> 
        <div>
          <br/>
        </div>

        <div className='FooterContainer' style={{color:"white"}}>
          <div className='FooterHeaders'>
            <h2 className='experience'><b>EXPERIENCE & EDUCATION</b></h2>
            <h2 className='certification '><b>CERTIFICATION</b></h2>
          </div>
          <br/>
          <div className='WorkDeatails'>
            <h3 ><MdWork/> <b>SPRITLE SOFTWARE</b> || Oct (2022) - Present</h3>
            <p className='line1'>SOFTWARE DEVELOPER</p>
          </div>
          <div className='FreelaceDetails'>
            <h3><MdWork/> <b>FREELANCER</b> || (2021)</h3>
            <p className='line1'>QSPIDERS</p>
          </div>
          <div className='FreelaceDetails'>
            <h3 ><MdWork /> <b>DEGREE</b> || (2020)</h3>
            <p className='line1'>BACHELOR OF ENGINEERING<b/> - JAYARAJ ANNAPAKIAM CSI COLLAGE OF ENGINEERING</p>
          </div>
          <div className='insituteContainer'>
          <div className='insitute'>
            <h3><FaSchool/> QSPIDERS</h3>
          </div>
          <div className='Courses'>
          <h3><MdSubject/> Courses</h3>
          </div>
          <div className='Subjects'>
            <li ><DiJava/>JAVA</li>
            <li ><SiMysql/>SQL</li>
            <li ><AiFillHtml5/>HTML</li>
            <li ><DiCss3/>CSS</li>
            <li ><DiJavascript1/>JAVASCRIPT</li>
            <li ><SiJava/>J2EE</li>
          </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About1