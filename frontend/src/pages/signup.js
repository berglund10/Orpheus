import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';

function SignupPage() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h2>Skapa ett nytt konto {user.username}</h2>
    </div>
  );
}

export default SignupPage;
