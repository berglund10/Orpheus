import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignupPage from './pages/signup';
import Home from './pages/home';
import LoggedIn from './pages/loggedIn';
import PrivateRoute from './components/privateRoute';
import { createContext } from 'react';
import { serverEndpoint } from './config';

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState({ username: 'bosse', password: '123', auth: false});
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(serverEndpoint + '/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if(response.status === 200) {
          const user = await response.json();
          console.log(user)
          if(user.password === '321') {
            setUser({...response.data, auth: true})
          }

        }
      } catch (err) {
        console.log(err.message)
      }
    };

    fetchData();
  }, []);

  console.log(user)


  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
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
