import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "[INSERT DATABASE URL]";
const supabaseKey = "[INSERT DATABASE KEY]";

const client = createClient(supabaseUrl, supabaseKey);

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    const { data, error } = await client
      .from("pokemon")
      .select("name, type, url");

    if (error) {
      console.error(error);
    } else {
      setPokemon(data);
    }
  }

  return (
    <div>
      <ul>
        {pokemon.map((pokemon, index) => (
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

export default PokemonList;
