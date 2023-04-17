import React, { useState, useEffect } from "react";

export default function PokemonAPI() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        const results = data.results;
        const pokemonData = await Promise.all(
          //runs the request concurrently
          results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return {
              name: pokemon.name,
              type: data.types.map((type) => type.type.name).join(", "),
              url: pokemon.url,
            };
          })
        );

        setPokemon(pokemonData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {pokemon.map((pokemon) => (
          <li>
            <h3>{pokemon.name}</h3>
            <p>Type: {pokemon.type}</p>
            <p>URL: {pokemon.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
