import React, { useState } from "react";

function API(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemon = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      const results = data.results;
      const pokemonArray = [];

      for (let i = 0; i < results.length; i++) {
        const pokemonResponse = await fetch(results[i]);
        const pokemonData = await pokemonResponse.json();
        pokemonArray.push(pokemonData);
      }

      setPokemonData(pokemonArray);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={getPokemon} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Pokemon"}
      </button>
      {props.render(pokemonData)}
    </>
  );
}

export default API;
