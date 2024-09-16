import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signUp";

// Styling
import "./startUpPage.css";
function StartUpPage() {
  const [view, setView] = useState("start");

  const renderContent = () => {
    switch (view) {
      case "login":
        return <Login />;
      case "signup":
        return <SignUp />;
      default:
        return (
          <div className="startUpContainer">
            <h1 className="title">Trail Tuned </h1>
            <div className="buttonContainer">
              <button onClick={() => setView("login")}>Login</button>
              <button onClick={() => setView("signup")}>Sign Up</button>
            </div>
            <div className="divider"></div>
            <div className="oAuthContainer">
              <button>Google oAuth</button>
              <button>Apple oAuth</button>
              <button>Strava oAuth</button>
            </div>
          </div>
        );
    }
  };

  return <div className="backGround">{renderContent()}</div>;
}

export default StartUpPage;
