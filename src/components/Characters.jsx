import React, { useState, useEffect, useReducer, useMemo } from 'react'
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
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results));
  }, []);

  const handleClick = favorite => {
    console.log(favorite)
    dispatch({type: "ADD_TO_FAVORITES", payload: favorite});
  }

  const handleSearch = (event) => {
    return setSearch(event.target.value);
  }

  const filteredCharacters = useMemo(() => {
    return characters.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase()))},
  [characters, search]);

  return (
    <div className="main">
      <div className="favorite-characters">
        {favorites.favorites.length ? <h3>Favorites</h3> : ""}
        {favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))}
      </div>
      <div className="search">
        <input type="text" onChange={(event) => handleSearch(event)} value={search} />
      </div>
      <div className="Characters">
        {filteredCharacters.map(character => (
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
