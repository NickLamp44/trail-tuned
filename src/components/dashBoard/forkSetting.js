import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function forkSetting() {
  const [forkModel, setForkModel] = useState("");
  const [airPSI, setAirPSI] = useState("");
  const [HSC, setHSC] = useState("");
  const [LSC, setLSC] = useState("");
  const [HSR, setHSR] = useState("");
  const [LSR, setLSR] = useState("");

  return (
    <div>
      {/* fork Model heading */}
      <h2 className="forkModel">Fox 36 Performance</h2>

      {/* AirChamber Settings */}
      <p>
        {" "}
        75 <span>PSI</span>
      </p>
      {/* Damper Settings */}
      <p>
        {" "}
        8 <span>HSC</span>
      </p>
      <p>
        {" "}
        7 <span>LSC</span>
      </p>
      <p>
        {" "}
        5 <span>HSR</span>
      </p>
      <p>
        {" "}
        5 <span>LSR</span>
      </p>
    </div>
  );
}

export default forkSetting;
