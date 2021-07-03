import { useState, useEffect } from "react";

const useCharacters = url => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
     })
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, [url]);

  return characters;
}

export default useCharacters;