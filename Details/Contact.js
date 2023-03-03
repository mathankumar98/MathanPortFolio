import React from 'react'
import '../CssFile/Contact.css'
import {CiMail} from 'react-icons/ci'
import {IoMdCall} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { useHref, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi';


function Contact() {
  const navigate=useNavigate()

  const HandleClickBackButton=()=>
  {
    navigate(-1)
  }
  const LinkedinButton=()=>
  {
    window.location.href="linkedin.com/in/mathan-kumar-46b8b6223"
  }

  return (
    <div className='container-fluid fullContainer'>
    <button onClick={HandleClickBackButton} className="backtwo" >< BiArrowBack style={{width:"25px",height:"25px",color:"white"}} /></button>
      <div className='HeadingTag'>
        <h1 className="contact" >C O N T A C T</h1>
        <h1 className='getin' >GET IN</h1> <h1 className='touch' >TOUCH</h1>
        </div>
        <div className='bodyContainer'>
        <div>
          <h1>DON'T BE SHY !</h1>
          <p>Feel free to get in touch with me. I am always open<br/> to discussing new projects, creative ideas or<br/> opportunities to be part of your visions.</p>
        </div>
        <div>
          < CiMail style={{height:"50px",width:"40px",color:" rgb(255, 160, 1)"}}/>
          <h3 className='mailme'>MAIL ME</h3>
          <b><p className='email'>krishmathan12345@gmail.com</p></b>
        </div>
        <div>
          <IoMdCall style={{height:"50px",width:"40px",color:" rgb(255, 160, 1)"}}/>
          <h3 className='callme'>CALL ME</h3>
          <b><p className='phone'>+916380558152</p></b>
        </div>
        <div className=''>
        <a href='https://www.linkedin.com/in/mathan-kumar-46b8b6223/'>
          <button onClick={LinkedinButton} className='links ms-3' ><FaLinkedinIn style={{height:"30px",width:"25px",color:"white"}}/></button></a>
          <a href='https://instagram.com/mathan.r_?igshid=ZDdkNTZiNTM='><button className='links ms-5'><BsInstagram style={{height:"30px",width:"25px",color:"white"}}/></button></a>
        </div>
        </div>

        <div className='form'>
          <form>
            <div>
            <input className='yourname' type="text" placeholder='          YOUR NAME'/>
            <input  className='youremail' type="email" placeholder='          YOUR EMAIL'/>
            </div>
            <br/>
            <br/>
            <div>
              <input className='yoursubject' type="text" placeholder='          YOUR SUBJECT'/>
              <p></p><br/>
              <input className='yourmsg' type="text" placeholder='           YOUR MESSAGE'/>
            </div>
            <br/><br/>
            <button style={{width:"200px",height:"49px",borderRadius:"30PX",backgroundColor:"#18191A",color:"white",borderColor:"rgb(255, 160, 1)",cursor:"pointer"}} className="finalbutton">SEND MESSAGE  </button>
          </form>
        </div>
    </div>
  )
}

export default Contact