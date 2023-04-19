import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './signup.css';
import Navbar from './Navbar';
import axios from 'axios';

function Leaderboard() {
  const { clueUrlStem } = useParams();
  
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2400/api/auth/array').then(response => {
      setTeams(response.data);
    }).catch(error => {
      console.log(error);
    });

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }, []);

  return (
    <div>
      <Navbar />
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