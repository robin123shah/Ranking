// NavBar.js

import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/Register">Register</a></li>
        <li><a href="/Ranking">Ranking</a></li>
        <li><a href="/AddMatch">Add Match</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
