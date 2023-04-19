import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './signup.css';
import Navbar from './Navbar';
import axios from 'axios';
import {backendURLBase} from './urlParams.js'

function Leaderboard() {
  const { clueUrlStem } = useParams();
  
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get(backendURLBase + 'api/auth/array').then(response => {
      setTeams(response.data);
    }).catch(error => {
      console.log(error);
    });

    const colors = ['#ff8888', '#88ff88', '#8888ff', '#ffff88', '#88ffff', '#ff88ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }, []);

  return (
    <div className="container">
      <h1>Leaderboard</h1>
      <table className="comicGreen">
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Clues Found</th>
                    <th>Last Discovery Time</th>
                </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team.name}>
                  <td>{team.name}</td>
                  <td>{team.clues}</td>
                  <td>{new Date(Date.parse(team.time)).toLocaleDateString('en-us', {month:"short", day:"numeric", hour:"numeric", minute:"numeric",second:"numeric"})}</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  );
}
export default Leaderboard;