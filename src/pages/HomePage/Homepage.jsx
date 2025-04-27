import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      console.log("Token exists:", token);
    }
  }, []);

  return (
    <main>
      <h1>Välkommen till vår hemsida!</h1>
    </main>
  );
};

export default Homepage;
