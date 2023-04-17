import "./App.css";
import PokemonList from "./components/PokemonList";
import React, { useState } from "react";
import AddPokemonForm from "./components/AddPokemon";

function App() {
  const [pokemons, setPokemons] = useState([
    {
      name: "Pikachu",
      type: "Electric",
      url: "https://pokeapi.co/api/v2/pokemon/pikachu",
    },
    {
      name: "Charizard",
      type: "Fire/Flying",
      url: "https://pokeapi.co/api/v2/pokemon/charizard",
    },
    {
      name: "Bulbasaur",
      type: "Grass/Poison",
      url: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    },
    {
      name: "Squirtle",
      type: "Water",
      url: "https://pokeapi.co/api/v2/pokemon/squirtle",
    },
  ]);

  // const renderPokemon = (pokemonData) => {
  //   if (pokemonData.length === 0) {
  //     return null;
  //   }

  function addNewPokemon(pokemon) {
    setPokemons([...pokemons, pokemon]); //Pass a new array and not update the old one
  }

  return (
    <div>
      <AddPokemonForm onAddPokemon={addNewPokemon} />

      <h1>List of Pokemons:</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
