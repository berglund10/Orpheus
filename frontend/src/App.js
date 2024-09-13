import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignupPage from './pages/signup';
import Home from './pages/home';
import LoggedIn from './pages/loggedIn';
import PrivateRoute from './components/privateRoute';
import { createContext } from 'react';

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState({ username: 'bosse', password: '123', auth: false });
  const [isAuth, setAuth] = useState(false);


  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route element={<PrivateRoute isAuthenticated={isAuth} />}>
              <Route path="/loggedIn" element={<LoggedIn />} />
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}
