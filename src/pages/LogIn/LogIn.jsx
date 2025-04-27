import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );
      if (!response.ok) throw new Error("Login failed");
      const JwtToken = await response.text();
      localStorage.setItem("jwtToken", JwtToken);
      setToken(JwtToken);
      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <main>
      <h1>Logga in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Användarnamn:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="password">Lösenord:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Logga in</button>
      </form>
      <form action="">
        <div></div>
      </form>
    </main>
  );
};

export default LogIn;
