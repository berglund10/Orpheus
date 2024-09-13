import { useContext, useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

function Login( {setAuth }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {user, setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.username === username && user.password === password) {
      setUser({...user, auth: true})
      setAuth(user.auth)
      navigate('/loggedIn');

    } else {
      setAuth(false)
      setErrorMessage("Fel användarnamn eller lösenord");
    }
  };

  return (
    <div>
      <h2>Logga in</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Användarnamn:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Lösenord:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Logga in</button>
      </form>
    </div>
  );
}

export default Login;
