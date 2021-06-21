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
          <div className="character-details">
            <h2>{character.name}</h2>
            <div>{character.status === "Alive" ? "💚" : character.status === "Dead" ? '❤️' : '💙'} {character.status}</div>
            <div>{character.gender}</div>
            <div>{character.species}</div>
            <div><strong>Location:</strong> {character.location.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters
