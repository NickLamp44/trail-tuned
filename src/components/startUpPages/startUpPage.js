import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

// Styling
import "./startUpPage.css";

function StartUpPage() {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response) => {
    // Handle Google OAuth success
    console.log(response);
    // You can navigate to a dashboard or home page
  };

  const handleGoogleLoginError = () => {
    // Handle Google OAuth failure
    console.error("Google login failed");
  };

  return (
    <div className="backGround">
      <div className="loginContainer">
        <img src="/path/to/your/logo.png" alt="App Logo" />
        <div className="buttonContainer">
          <button onClick={() => navigate("/login.js")}>Login</button>
          <button onClick={() => navigate("/signUp.js")}>Sign Up </button>
        </div>
        <div className="oAuthContainer">
          {/* Google */}
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />
          </GoogleOAuthProvider>

          {/* Apple */}
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />
          </GoogleOAuthProvider>

          {/* Strava?  */}
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
}

export default StartUpPage;
