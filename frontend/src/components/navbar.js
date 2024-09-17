import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext } from 'react';

function NavBar() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    const handleLogout = () => {
        if (user.auth) {
            user.auth = false;
            navigate('/');
        }
    };

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
                    <div onClick={handleLogout} style={linkStyle}>Log out</div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;