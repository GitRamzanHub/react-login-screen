import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App(){
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </Router>
  );
}

export default App;