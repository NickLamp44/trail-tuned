import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Styling
import "./loadingPage.css";

function LoadingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show the loading page after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Transition to the startUpPage after 3 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/startUpPage");
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    isVisible && (
      <div className="backGround">
        <div className="loading-text">Loading...</div>
      </div>
    )
  );
}

export default LoadingPage;
