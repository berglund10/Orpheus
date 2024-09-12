import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignupPage from './pages/signup';
import Home from './pages/home';
import LoggedIn from './pages/loggedIn';
import PrivateRoute from './components/privateRoute';

export default function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route element={<PrivateRoute isAuthenticated={isAuth} />}>
        <Route path="/loggedIn" element={<LoggedIn />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}
