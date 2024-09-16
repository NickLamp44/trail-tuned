import React, { useState } from "react";
import axios from "axios";

// Styling
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", response.data.token);
      // Handle successful login (e.g., navigate to dashboard)
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
