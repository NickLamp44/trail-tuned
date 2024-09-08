import React, { useState, useEffect } from "react";
import "./loadingPage.css";

const LoadingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the loading page after 1 second delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="background">
        <div className="loading-container">
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    )
  );
};

export default LoadingPage;
