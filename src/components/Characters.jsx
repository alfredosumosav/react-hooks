import React, { useState, useEffect, useReducer } from 'react'
import './Characters.css'

// useReducer

// Initial favorite reducer state
const initialState = {
  favorites: []
};

// favorite reducer
const favoriteReducer = (state = [], action) => {
  if (state.favorites.includes(action.payload)) return state;
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state
  }
}

// characters' component
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results));
  }, []);

  const handleClick = favorite => {
    console.log(favorite)
    dispatch({type: "ADD_TO_FAVORITES", payload: favorite});
  }

  return (
    <div className="main">
      <div className="favorite-characters">
        {favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))}
      </div>
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
            <button onClick={() => handleClick(character)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
