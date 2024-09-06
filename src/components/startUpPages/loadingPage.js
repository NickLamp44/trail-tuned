import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Assuming you're using Google OAuth
import { GoogleLogin } from "@react-oauth/google"; // Google Login Button
// Add similar imports for Apple and Strava if needed

function LandingPage() {
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
    <div>
      <div className="backGround">
        <div className="container">
          <img src="/path/to/your/logo.png" alt="App Logo" />
          <div>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        </div>
      </div>

      <hr />

      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
        />
      </GoogleOAuthProvider>

      {/* Add similar buttons for Apple and Strava */}
    </div>
  );
}

export default LandingPage;
