import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './signup.css';

function Signup() {
  const { clueUrlStem } = useParams();

  useEffect(() => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }, []);

  return (
    <div>
      <FloatingWords>
        {/* <span>qr code 1</span>
        <span>qr code 2</span>
        <span>qr code 3</span>
        <span>qr code 4</span>
        <span>qr code 5</span>
        <span>qr code 6</span>
        <span>qr code 7</span>
        <span>qr code 8</span>
        <span>qr code 9</span>
        <span>qr code 10</span> */}
      </FloatingWords>
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

const float = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(100%, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const FloatingWords = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: -1;
  span {
    position: relative;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    animation-name: ${float};
    animation-duration: 10s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 2s;
    }
    &:nth-child(3) {
      animation-delay: 4s;
    }
    &:nth-child(4) {
      animation-delay: 6s;
    }
    &:nth-child(5) {
      animation-delay: 8s;
    }
    &:nth-child(6) {
      animation-delay: 10s;
    }
    &:nth-child(7) {
      animation-delay: 12s;
    }
    &:nth-child(8) {
      animation-delay: 14s;
    }
    &:nth-child(9) {
      animation-delay: 16s;
    }
    &:nth-child(10) {
      animation-delay: 18s;
    }
  }
`;

export default Signup;
