import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Details/About';
import About1 from './Details/About1';
import Contact from './Details/Contact';
import Projects from './Details/Projects';
import Skills from './Details/Skills';
import Main from './Main';


function App() {
  return (
    <div className="App1">
      
      <Routes>
        <Route exact  path='/' element={<Main/>}/>
        <Route exact  path='/About' element={<About/>}/>
        <Route exact  path='/About/Contact' element={<Contact/>}/>
        <Route exact  path='/About/Skills' element={<Skills/>}/>
        <Route exact  path='/About/About1' element={<About1/>}/>
        <Route exact  path='/About/Projects' element={<Projects/>}/>
      </Routes>
      </div>
  );
}

export default App;
