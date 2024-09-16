import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ShockSetting from "./shockSetting";
import ForkSetting from "./forkSetting";

// Styling
import "./dashboard.css";

function DashBoard() {
  const [view, setView] = useState("start");

  const renderContent = () => {
    switch (view) {
      default:
        return (
          <div className="dashBoardContainer">
            <div className="header">
              <div className="border"></div>
              <div className="hamburgerMenu"></div>
              <div className="userPic"></div>
            </div>

            {/* last ride Map + Stats */}
            <div className="lastRideContainer">
              {" "}
              Last Ride
              {/* Import last Ride Map from DB */}
              <div className="map"></div>
              <div className="lastRideStats">
                {/* Import last Ride Stats from DB */}
                <div className="date">
                  <p> 4/20/24 </p>
                  <p className="lastRideDate"> </p>
                </div>
                <div className="time">
                  <p> Time </p>
                  <p> 1:32.22 </p>
                  <p className="lastRideTime"> </p>
                </div>
                <div className="distance">
                  <p> Distance </p>
                  <p> 15.23 MI </p>
                  <p className="lastRideDistance"> </p>
                </div>
                <div className="avgSpeed">
                  <p> Avg. Speed </p>
                  <p> 12.4 mph </p>
                  <p className="lastRideAvgSpeed"> </p>
                </div>
              </div>
            </div>

            {/* insert Fork Setting and Shock Setting components */}
            <div className="currentUserSettings">
              <div className="forkSetting">
                <ForkSetting />
              </div>

              <div className="shockSetting">
                <ShockSetting />
              </div>
            </div>

            {/* footer */}
            <div className="footer">
              <div className="sideBar"></div>

              <button onClick={() => setView("startRide")}>Start Ride</button>

              <div className="sideBar"></div>
            </div>
          </div>
        );
    }
  };

  return <div className="backGround">{renderContent()}</div>;
}

export default DashBoard;
