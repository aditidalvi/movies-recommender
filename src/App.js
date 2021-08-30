import "./styles.css";
import { useState } from "react";
const moviesDictionary = {
  comedy: [
    {
      name: "Hera Pheri",
      description:
        "Two tenants and a landlord, in desperate need of money, chance upon a ransom call via a cross connection. They hatch a plan to claim the ransom for themselves",
      rating: "4.5/5"
    },
    {
      name: "Hungama",
      description:
        "A millionaire businessman living in a village decides to move to the city with his wife. They soon get into a case of mistaken identity that results in comical situations.",
      rating: "4/5"
    },
    {
      name: "Home Alone",
      description:
        "When bratty 8-year-old Kevin McCallister (Macaulay Culkin) acts out the night before a family trip to Paris, his mother (Catherine O'Hara) makes him sleep in the attic. After the McCallisters mistakenly leave for the airport without Kevin, he awakens to an empty house and assumes his wish to have no family has come true. But his excitement sours when he realizes that two con men (Joe Pesci, Daniel Stern) plan to rob the McCallister residence, and that he alone must protect the family home.",
      rating: "4/5"
    }
  ],

  action: [
    {
      name: "URI",
      description:
        "Major Vihaan Singh Shergill of the Indian Army leads a covert operation against a group of militants who attacked a base in Uri, Kashmir, in 2016 and killed many soldiers.",
      rating: "4.8/5"
    },
    {
      name: "Tanhaji",
      description:
        "Chhatrapati Shivaji's right-hand man, braveheart Subhedar Tanhaji Malusare, pits his sharp acumen against the brawn of ruthless and hedonistic Mughal chieftain Udaybhan Singh Rathore to recapture Kondhana for the Maratha empire",
      rating: "4.5/5"
    },
    {
      name: "Avengers Endgame",
      description:
        "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
      rating: "4.8/5"
    }
  ],
  thriller: [
    {
      name: "Kahani",
      description:
        "A poison-gas attack on a Kolkata Metro Rail compartment kills the passengers on board. Two years later Vidya Bagchi, a pregnant British-Indian software engineer, arrives in Kolkata from London during the Durga Puja festivities in search of her missing husband, Arnab Bagchi.",
      rating: "4/5"
    },
    {
      name: "Drishyam",
      description:
        "When the disappearance of a policewoman's son threatens to ruin Vijay's family, he leaves no stone unturned in order to shield his family.",
      rating: "4/5"
    },
    {
      name: "Baby",
      description:
        "An elite team of the Indian intelligence system perpetually strives to detect and eliminate terrorists and their plots. Officer Ajay leads a team to destroy one such potentially lethal operation.",
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
                    textAlign: "left",
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
                    Name:- {movies.name}{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "medium",
                      fontFamily: "Kaisei HarunoUmi",
                      padding: "0.5rem 0"
                    }}
                  >
                    {" "}
                    Film Synopsis:- {movies.description}{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "medium",
                      fontFamily: "Kaisei HarunoUmi",
                      padding: "0.5rem 0"
                    }}
                  >
                    {" "}
                    Ratings:- {movies.rating}{" "}
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
