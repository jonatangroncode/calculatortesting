import React from "react";

const MovieList = ({ movies }) => {
  return (
    <section>
      <h2>Här är dina sparade filmer:</h2>
      <ul>
        {movies.map((b, i) => (
          <li key={i}>
            <strong>{b.title}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
