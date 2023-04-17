import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './signup.css';
import Navbar from './Navbar';

function Signup() {
  const { clueUrlStem } = useParams();

  useEffect(() => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }, []);

  return (
    <div>
      <Navbar />
      <table className="container2">
        <tbody>
          <tr>
            <td>
              <h1>Team Registration</h1>
              <p>{clueUrlStem}</p>
              <form action="#" method="post">
                <label htmlFor="team-name">Team Name:</label>
                <input type="text" id="team-name" name="team-name" required />
                <button type="submit">Submit</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Signup;
