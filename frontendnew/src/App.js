import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Customseg from './components/CustomsegA';
import Contact from './components/Contact';
import {Route, Routes } from 'react-router-dom';
import './components/Navbar.css';
import {NavLink} from "react-router-dom"
import {CgProfile} from 'react-icons/cg';
import Login from './components/Login';
import more from './components/more';

function App() {
  return (
    <>
    <div className='Md'>
    <div className='nav1'>
        <ul>
          <li>
            <NavLink className="nav2" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav2" to="/About">About</NavLink>
          </li>
          <li>
            <NavLink className="nav2" to="/contact">Contact</NavLink>
          </li>

        </ul>
    </div>
    <Routes>
      <Route exact path='/' Component={Navbar}/>
      <Route path='/About' Component={About}/>
      <Route path='/Contact' Component={Contact}/>
      <Route path='/Customseg' Component={Customseg}/>
      <Route path='/Login' Component={Login}/>
      <Route path='/more' Component={more}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
