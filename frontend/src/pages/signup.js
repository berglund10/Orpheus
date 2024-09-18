import React, { useState } from "react";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const createAccount = (e) => {
    e.preventDefault();
    if (true) {
      console.log("Logik för att skapa konto här sen");
    } else {
      setErrorMessage("Kunde inte skapa användaren");
    }
  };

  return (
    <div>
      <h2>Skapa konto</h2>
      <form onSubmit={createAccount}>
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
        <button type="submit">Skapa konto</button>
      </form>
    </div>
  );
}

export default SignupPage;
