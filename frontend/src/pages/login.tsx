import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserClient } from "../clients/userClient";

function Login() {
  const user = useUserClient();
  console.log(user);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (user)
      if (user.username === username && user.password === password) {
        user.auth = true;
      } else {
        setErrorMessage("Fel användarnamn eller lösenord");
      }
  };

  useEffect(() => {
    if (user)
      if (user.auth) {
        navigate("/");
      }
  }, []);

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
