import "./styles.css";
import React, { useState } from "react";
import gameData from "./data.js";

export default function App() {
  let games = Object.keys(gameData);
  const [type, setGameType] = useState("BattleRoyale");
  function gameClickHandler(type) {
    setGameType(type);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="game">
          🎮
        </span>
        <span style={{ color: "gray" }}>Game</span>
        <span style={{ color: "green" }}>Zone</span>
      </h1>
      {games.map(function (type) {
        return (
          <button
            className="btn"
            onClick={() => gameClickHandler(type)}
            key={type}
          >
            {type}
          </button>
        );
      })}

      <h3>Here are few mobile game categories. Check out my preferences.</h3>
      <ul>
        {gameData[type].map(function (GAME) {
          return (
            <div className="container" key={GAME.name}>
              <section>
                <img className="img" src={GAME.photo} alt="game-logo" />
                <div>
                  <div>
                    <strong>Game Name:</strong> {GAME.name}
                  </div>
                  <div>
                    <strong>Type: </strong>
                    {GAME.type}
                  </div>
                  <div>
                    <strong>Platform: </strong>
                    {GAME.platform}
                  </div>
                  <div>
                    <strong>Mode: </strong>
                    {GAME.mode}
                  </div>
                  <div>
                    <strong>Rating: </strong>
                    {GAME.rating}
                  </div>
                  <div className="about">
                    <strong>About the game: </strong>
                    {GAME.AboutGame}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
