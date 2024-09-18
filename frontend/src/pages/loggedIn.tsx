import React, { useContext } from "react";
import { serverEndpoint } from "../config";

function LoggedIn() {
  async function addUsertoDB() {
    try {
      await fetch(serverEndpoint + "/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "user.username",
          password: "user.password",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>Du är inloggad {"changeLater"}</h2>
      <button onClick={addUsertoDB}>Add me to DB</button>
    </div>
  );
}

export default LoggedIn;
