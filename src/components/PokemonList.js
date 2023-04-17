import React from "react";

export default function PokemonList({ pokemons, apiPokemon }) {
  return (
    <div>
      {/* <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <h3>{pokemon.name}</h3>
            <p>Type: {pokemon.type}</p>
            <p>URL: {pokemon.url}</p>
          </li>
        ))}
      </ul> */}

      <ul>
        {apiPokemon.map((pokemon, index) => (
          <li key={index}>
            <h3>{pokemon.name}</h3>
            <p>Type: {pokemon.type}</p>
            <p>URL: {pokemon.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
