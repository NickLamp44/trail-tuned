import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const handleGoogleLoginSuccess = (response) => {
  // Handle Google OAuth success
  console.log(response);
  // You can navigate to a dashboard or home page
};

const handleGoogleLoginError = () => {
  // Handle Google OAuth failure
  console.error("Google login failed");
};

const GoogleOAuthButton = () => (
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <GoogleLogin
      onSuccess={handleGoogleLoginSuccess}
      onError={handleGoogleLoginError}
    />
  </GoogleOAuthProvider>
);

export default GoogleOAuthButton;
