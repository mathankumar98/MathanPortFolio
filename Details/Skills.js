import React from 'react'
import '../CssFile/Skills.css'
import { AiOutlineHtml5 } from "@react-icons/all-files/ai/AiOutlineHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { GrReactjs } from "@react-icons/all-files/gr/GrReactjs";
import { DiJava } from "@react-icons/all-files/di/DiJava";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import {SiHibernate} from 'react-icons/si';
import {SiSpringboot} from 'react-icons/si';
import {BiArrowBack} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Skills() {
 const navigate=useNavigate();
  const HandleClickBackButton=()=>
{
  navigate(-1)
}
  return (
    <div className='HoleContainer'>
   
     <div className='container  p-5  FullContainer'>
     <button onClick={HandleClickBackButton} className="back" >< BiArrowBack style={{width:"25px",height:"25px",color:"white"}} /></button>
        <h1 style={{color:"white"}}><b>MY SKILLS</b> </h1><br/><br/><br/><br/>
        <div className='container  SkillsRow1'>
            <button className='button1 '><b> <AiOutlineHtml5 className=' ButtonIcon1'/> HTML</b></button>
            <button className='button1 '><b><FaCss3Alt className='ButtonIcon1'/> CSS </b></button>
            <button className='button1 '><b><DiJavascript1 className='ButtonIcon1'/> JAVASCRIPT </b></button>
        </div>
        <br/><br/>
        <div className='container SkillsRow2'>
        <button className='button1'><b><GrReactjs className=' ButtonIcon1' /> REACTJS </b></button>
        <button className='button1'><b><DiJava className='ButtonIcon1' /> JAVA </b></button>
        <button className='button1'><b><SiMysql className='ButtonIcon1' /> SQL </b></button>
        </div>
        <br/><br/>
        <div className='container  SkillsRow3'> 
        <button className='button1 '><b><FaJava className='ButtonIcon1' /> J2EE </b></button>
        <button className='button1 '><b><SiHibernate className='ButtonIcon1' /> HIBERNATE </b></button>
        <button className='button1'><b><SiSpringboot className='ButtonIcon1' /> SPRING BOOT </b></button>
        </div>
    </div>
    </div>
  )
}

export default Skills