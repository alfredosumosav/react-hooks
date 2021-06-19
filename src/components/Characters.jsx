import React, { useState, useEffect } from 'react'
import './Characters.css'

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results));
  }, [])

  console.log(characters)
  return (
    <div className="Characters">
      {characters.map(character => (
        <div className="character" key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Characters
