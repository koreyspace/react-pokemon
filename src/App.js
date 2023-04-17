import "./App.css";
import PokemonList from "./components/PokemonList";
import React, { useState } from "react";
import AddPokemonForm from "./components/AddPokemon";
import PokemonAPI from "./components/PokemonAPI";

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

  const [apiPokemon, setApiPokemon] = useState([]);

  function addNewPokemon(pokemon) {
    setPokemons([...pokemons, pokemon]); //Pass a new array and not update the old one
  }

  function handleData(data) {
    setApiPokemon(data);
  }

  return (
    <div>
      <h1>List of Pokemons:</h1>
      <PokemonList pokemons={pokemons} apiPokemon={apiPokemon} />
      {/* <AddPokemonForm onAddPokemon={addNewPokemon} /> */}
      <PokemonAPI onData={handleData} />
    </div>
  );
}

export default App;
