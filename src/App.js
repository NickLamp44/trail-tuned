import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingPage from "./components/startUpPages/loadingPage";
import StartUpPage from "./components/startUpPages/startUpPage";
import DashBoard from "./components/dashBoard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/startUpPage" element={<StartUpPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
