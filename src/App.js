import "./styles.css";
import { useState } from "react";
const moviesDictionary = {
  comedy: [
    { name: "Hera Pheri", rating: "4.5/5" },
    { name: "Hungama", rating: "4/5" },
    {
      name: "Home Alone",
      rating: "4/5"
    }
  ],

  action: [
    {
      name: "URI",
      rating: "4.8/5"
    },
    {
      name: "Tanhaji",
      rating: "4.5/5"
    },
    {
      name: "Avengers Endgame",
      rating: "4.8/5"
    }
  ],
  thriller: [
    {
      name: "Kahani",
      rating: "4/5"
    },
    {
      name: "Drishyam",
      rating: "4/5"
    },
    {
      name: "Baby",
      rating: "4/5"
    }
  ]
};

const moviesWeKnow = Object.keys(moviesDictionary);

export default function App() {
  const [selectedGenre, setGenre] = useState("thriller");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "Open Sans" }}>
        <span role="img" aria-label="movie image">
          🎥
        </span>
        goodMovies
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>
      <div>
        {moviesWeKnow.map(function (movie) {
          return (
            <button
              style={{
                padding: "1rem",
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
                borderRadius: "5px",
                margin: "0.5rem",
                marginBottom: "2rem",
                fontFamily: "Oswald",
                fontSize: "medium"
              }}
              onClick={() => genreClickHandler(movie)}
              key={movie}
            >
              {movie}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDictionary[selectedGenre].map(function (movies) {
            return (
              <ul style={{ textAlign: "center", paddingInlineStart: "0" }}>
                <li
                  style={{
                    width: "60%",
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "7px",
                    padding: "1.5rem",

                    marginInlineStart: "0",
                    margin: "1rem auto",
                    listStyle: "none"
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Kaisei HarunoUmi",
                      fontWeight: "bold"
                    }}
                  >
                    {" "}
                    {movies.name}{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "medium",
                      fontFamily: "Kaisei HarunoUmi",
                      padding: "0.5rem 0"
                    }}
                  >
                    {" "}
                    {movies.rating}{" "}
                  </div>
                </li>
              </ul>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
