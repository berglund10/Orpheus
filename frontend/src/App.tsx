import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignupPage from "./pages/signup";
import Home from "./pages/home";
import LoggedIn from "./pages/loggedIn";
import PrivateRoute from "./components/privateRoute";
import { serverEndpoint } from "./config";
import NavBar from "./components/navbar";
import UserClientContext from "./clients/userClient";
import Match from "./pages/match";
import Bets from "./pages/bets";

export default function App() {
  const [user, setUser] = useState({
    username: "bosse",
    password: "123",
    auth: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await fetch(serverEndpoint + "/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          const user = await response.json();
          if (user.password === "321") {
            setUser({ ...response.data, auth: true });
          }
        }
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <UserClientContext.Provider value={user}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route element={<PrivateRoute isAuthenticated={user.auth} />}>
              <Route path="/loggedIn" element={<LoggedIn />} />
            </Route>
            <Route path="/match" element={<Match />} />
            <Route path="/bets" element={<Bets />} />
          </Routes>
        </Router>
      </UserClientContext.Provider>
    </div>
  );
}
