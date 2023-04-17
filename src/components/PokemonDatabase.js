import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mdqfeoqgnshcmqqezlgr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcWZlb3FnbnNoY21xcWV6bGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3Mjg1NDksImV4cCI6MTk5NzMwNDU0OX0.-p3o-DJ4hjhA1HmLsiPZb2x-470XmtLZC52iWlkJD0U";

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
      <h1>Pokemons</h1>
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
