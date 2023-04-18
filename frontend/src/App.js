
import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Signup from './Signup';


let promiseResponse = new Array;
let teams = axios.get('http://localhost:2400/api/auth/array').then(response => {
  promiseResponse = response.data;
  console.log(promiseResponse);
  return promiseResponse;
})

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/:clueURLStem" element={<Signup></Signup>}></Route>
          <Route path="/" element={<div>Leaderboard goes here</div>} />
          <Route path="/leaderboard" element={<div>Leaderboard goes here</div>} />
        </Routes>

      </BrowserRouter>


    </div>


  )
}
