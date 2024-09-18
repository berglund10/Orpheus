import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Välkommen till Orpheus!</h1>
      <div className="LoginContainer">
        <h2>Logga in eller skapa ett konto för att börja.</h2>
        <Link to="/login">
          <button>Logga in</button>
        </Link>
        <Link to="/signup">
          <button>Skapa konto</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
