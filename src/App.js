import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingPage from "./components/startUpPages/loadingPage";
import StartUpPage from "./components/startUpPages/startUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/startUpPage" element={<StartUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
