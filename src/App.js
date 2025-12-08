// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import A from "./myComponents/A";

function App() {
  return (
    <Router>
      <div className="app-body">
        <Routes>
          {/* Redirect Home ("/") to "/a" */}
          <Route path="/" element={<Navigate to="/a" />} />

          {/* A component on "/a" */}
          <Route path="/a" element={<A />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
