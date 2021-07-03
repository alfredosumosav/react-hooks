import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import './Characters.css'
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

// useReducer

// Initial favorite reducer state
const initialState = {
  favorites: []
};

const API = "https://rickandmortyapi.com/api/character";

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
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  // add character to favorites when "Add to Favorites" button is clicked
  const handleClick = favorite => {
    dispatch({type: "ADD_TO_FAVORITES", payload: favorite});
  }

  // update search input when change event is detected
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // filter characters based on search input and memoize using useMemo
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

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

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
