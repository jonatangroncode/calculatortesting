import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    description: "",
    productionYear: "",
  });

  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchMovies();
    }
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://tokenservice-jwt-2025.fly.dev/movies",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  console.log(movies);

  return (
    <main>
      <h1>Välkommen till en hemsida som visar upp dina filmer!</h1>
      <section>
        <button onClick={fetchMovies}>Logga in och hämta filmer</button>
        {error && <p>{error}</p>}
        <ul>
          {movies.map((b, i) => (
            <li key={i}>
              <strong>{b.title}</strong>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Skapa ny film</h2>
        <form></form>
      </section>
    </main>
  );
};

export default Homepage;
