import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const ulStyle = {
    listStyleType: 'none',
    display: 'flex'
  };

  const liStyle = {
    marginRight: '20px'
  };

  return (
    <nav style={navStyle}>
      <div>
        <h1>Orpheus</h1>
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/signup" style={linkStyle}>Sign up</Link>
        </li>
        <li style={liStyle}>
        <div style={linkStyle}>Log out</div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;