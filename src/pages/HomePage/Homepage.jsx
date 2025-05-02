import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import CreateMovie from "../../components/CreateMovie/CreateMovie";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tokenservice-jwt-2025.fly.dev/movies",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create movie");
      }
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, data]);
      setFormData({
        title: "",
        director: "",
        description: "",
        productionYear: "",
      });
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  };

  return (
    <main>
      <h1>Välkommen till en hemsida som visar upp dina filmer!</h1>
      {error && <p>{error}</p>}
      <MovieList movies={movies} />

      <CreateMovie
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />

      <button className="logout">
        <Link to="/login">Logga ut</Link>
      </button>
    </main>
  );
};

export default Homepage;
