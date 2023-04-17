import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #5d5a5a;
  color: #fff;
  padding: 10px;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.li`
  margin: 0 10px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/">
        <h1>SignUp</h1>
      </Link>
      <Link to="/Leaderboard">
        <h1>Leaderboard</h1>
      </Link>
    </NavbarContainer>
  );
}

export default Navbar;
