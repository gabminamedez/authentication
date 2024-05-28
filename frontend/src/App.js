import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TokenPage from "./components/TokenPage";
import TokenLogin from "./components/TokenLogin";
import useToken from "./hooks/useToken";

import "./App.css";

function App() {
  const { token, setToken } = useToken();

  return (
    <Router>
      <div className="wrapper">
        <h1>Authentication</h1>

        <Routes>
          <Route
            path="/token-page"
            element={token ? <TokenPage /> : <TokenLogin setToken={setToken} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
