
import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Signup from './Signup';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';


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
          <Route path="/" element={<div><Leaderboard></Leaderboard></div>}/>
          <Route path="/Leaderboard" element={<Leaderboard></Leaderboard>}></Route>
        </Routes>

      </BrowserRouter>


    </div>


  )
}
