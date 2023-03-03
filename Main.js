import React from 'react';
import Body from './Home/Body';
import Footer from './Home/Footer';
import Header from './Home/Header';
import RightNav from './Home/RightNav'
import './App.css';

function Main() {
  return (
    <div className='App'>
      <Header/>
      <Body/>
      <RightNav/>
      <Footer/>
    </div>
  )
}

export default Main