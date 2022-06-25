import React, { Component } from 'react';
import "./App.css";
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/animate.css/animate.min.css'
import {HomePage} from "../src/pages/home"
import {RoadMap} from "../src/pages/roadm1ap"
import {WhitePaper} from "../src/pages/whitepapaer"

import {Route, Routes } from "react-router-dom";


function App()  {
  
 
  return (
    <div>
      <Routes>
      <Route exact path='/:id' element={<HomePage />} />
        <Route exact path='/' element={<HomePage />} />
        
        <Route exact path='/roadMap' element={<RoadMap />} />
        <Route exact path='/whitePaper' element={<WhitePaper />} />
      </Routes>
    </div>
  )

}

export default App