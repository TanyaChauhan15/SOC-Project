import React, { useState, useEffect } from "react";
import "./App.css";

const GRID_SIZE = 4;
const TOTAL_TILES = GRID_SIZE * GRID_SIZE;

function App() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    generateShuffledTiles();
  }, []);

  const generateShuffledTiles = () => {
    let arr = [...Array(TOTAL_TILES - 1).keys()].map(n => n + 1);
    arr.push(null);
    do {
      arr = shuffle([...arr]);
    } while (!isSolvable(arr));
    setTiles(arr);
  };

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const isSolvable = arr => {
    const invCount = arr.reduce((inv, curr, i) => {
      if (curr === null) return inv;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] !== null && curr > arr[j]) inv++;
      }
      return inv;
    }, 0);

    const blankRow = Math.floor(arr.indexOf(null) / GRID_SIZE);
    return (invCount + blankRow) % 2 === 0;
  };

  const handleTileClick = index => {
    const newTiles = [...tiles];
    const emptyIndex = newTiles.indexOf(null);

    const isAdjacent = (index === emptyIndex - 1 && emptyIndex % GRID_SIZE !== 0) ||
      (index === emptyIndex + 1 && index % GRID_SIZE !== 0) ||
      index === emptyIndex - GRID_SIZE ||
      index === emptyIndex + GRID_SIZE;

    if (isAdjacent) {
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
    }
  };

  return (
    <div className="container">
      <h1>15 Puzzle Game</h1>
      <div className="grid">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile === null ? "empty" : ""}`}
            onClick={() => handleTileClick(index)}
          >
            {tile}
          </div>
        ))}
      </div>
      <button className="new-game" onClick={generateShuffledTiles}>New Game</button>
    </div>
  );
}

export default App;

