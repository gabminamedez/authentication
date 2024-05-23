import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components//Dashboard";
import Login from "./components/Login";
import Preferences from "./components/Preferences";
import useToken from "./useToken";

import "./App.css";

function App() {
  const { token, setToken } = useToken();

  return (
    <Router>
      <div className="wrapper">
        <h1>Application</h1>

        <Routes>
          <Route
            path="/dashboard"
            element={token ? <Dashboard /> : <Login setToken={setToken} />}
          />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
