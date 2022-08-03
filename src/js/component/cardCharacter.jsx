import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getPerson = async () => {
      try {
        await fetch("https://rickandmortyapi.com/api/character")
          .then((res) => res.json())
          .then((data) => setCharacters(data.results));
      } catch {
        (err) => console.error(err);
      }
    };
    getPerson();
  }, []);

  return characters.map((character) => {
    return (
     
        <div className="container-fluid d-flex " key={character.id}>
          <div className="card" style={{ width: 18 + "rem" }}>
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body border">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text m-1"> Status:{character.status} </p>
              <p className="card-text m-1"> Species: {character.species}</p>
              <p className="card-text ">Gender: {character.gender}</p>
              <div className=" d-flex justify-content-between">
                <Link to={`/characters/${character.id}`}>
                  <button type="button" className="btn btn-outline-primary">
                    Learn More
                  </button>
                </Link>
                <button className="btn btn-outline-warning btn-sm border-0 p-0 m-0 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-chat-square-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" />
                    <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    
    );
  });
};
export default CardCharacter;
