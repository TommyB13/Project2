
import React, { useState } from 'react';
import {BrowserRouter, Route, Link, Routes, useLocation} from 'react-router-dom';

import Signup from './Signup';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/:clueURLStem" element={<div>Leaderboard goes here.....</div>}/>
          <Route path="/Leaderboard" element={<Leaderboard></Leaderboard>}></Route>
        </Routes>
        
      </BrowserRouter>
      
      
    </div>
    
    
  )
}
