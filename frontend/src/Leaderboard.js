import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './signup.css';
import Navbar from './Navbar';

function Leaderboard() {
  const { clueUrlStem } = useParams();

  useEffect(() => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }, []);

  return (
    <div>
      <Navbar />
      <table class="comicGreen">
            <thead>
                <tr>
                    <th>Teams</th>
                    <th>Clues Found</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Team 1</td>
                    <td>3</td>
                    <td>Noon</td>
                </tr>
                <tr>
                    <td>Team 2</td>
                    <td>2</td>
                    <td>13:00</td>
                </tr>
                <tr>
                    <td>Team 3</td>
                    <td>1</td>
                    <td>14:00</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default Leaderboard;



// <!doctype html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">

//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>LeaderBoard</title>
//     <link rel="stylesheet" href="/frontend\public\loginproj\style.css">
// </head>

// <body>
//     <div id="react_table">
//         <table class="comicGreen">
//             <thead>
//                 <tr>
//                     <th>Teams</th>
//                     <th>Clues Found</th>
//                     <th>Time</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Team 1</td>
//                     <td>3</td>
//                     <td>Noon</td>
//                 </tr>
//                 <tr>
//                     <td>Team 2</td>
//                     <td>2</td>
//                     <td>13:00</td>
//                 </tr>
//                 <tr>
//                     <td>Team 3</td>
//                     <td>1</td>
//                     <td>14:00</td>
//                 </tr>
//             </tbody>
//             </tr>
//         </table>
//     </div>
//     <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
//     <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
//     <script src="react_table.js"></script>
// </body>