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
      <section>
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="title"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="director">Director: </label>
            <input
              type="director"
              id="director"
              name="director"
              value={formData.director}
              onChange={(e) =>
                setFormData({ ...formData, director: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="productionYear">productionYear: </label>
            <input
              type="number"
              id="productionYear"
              name="productionYear"
              value={formData.productionYear}
              onChange={(e) =>
                setFormData({ ...formData, productionYear: e.target.value })
              }
              required
            />
          </div>
          <button>Posta film</button>
        </form>
      </section>
      <button className="logout">
        <Link to="/login">Logga ut</Link>
      </button>
    </main>
  );
};

export default Homepage;
