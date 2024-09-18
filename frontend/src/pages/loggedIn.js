import React, { useContext } from "react";
import { UserContext } from "../App";
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
          username: user.username,
          password: user.password,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Du är inloggad {user.username}</h2>
      <button onClick={addUsertoDB}>Add me to DB</button>
    </div>
  );
}

export default LoggedIn;
