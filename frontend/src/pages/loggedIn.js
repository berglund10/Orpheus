import React, { useContext } from 'react';
import { UserContext } from '../App';


function LoggedIn() {
  const user = useContext(UserContext)
  return (
    <div>
      <h2>Du är inloggad {user.username}</h2>
    </div>
  );
}

export default LoggedIn;
