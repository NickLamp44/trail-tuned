import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ShockSetting() {
  const [forkModel, setForkModel] = useState("");
  const [airPSI, setAirPSI] = useState("");
  const [HSC, setHSC] = useState("");
  const [LSC, setLSC] = useState("");
  const [HSR, setHSR] = useState("");
  const [LSR, setLSR] = useState("");

  return (
    <div>
      {/* fork Model heading */}
      <h2 className="shockModel">Fox Float X2</h2>

      {/* AirChamber Settings */}
      <p>
        {" "}
        175 <span>PSI</span>
      </p>

      {/* Volume Reducer Settings */}
      <p>
        {" "}
        2 <span>Tokens</span>
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

export default ShockSetting;
