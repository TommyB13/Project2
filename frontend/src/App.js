
import React, { useState } from 'react';
import {BrowserRouter, Route, Link, Routes, useLocation} from 'react-router-dom';

import Signup from './Signup';

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/:clueURLStem" element={<Signup></Signup>}></Route>
          <Route path="/" element={<div>Leaderboard goes here</div>}/>
          <Route path="/leaderboard" element={<div>Leaderboard goes here</div>}/>
        </Routes>
        
      </BrowserRouter>
      
      
    </div>
    
    
  )
}
