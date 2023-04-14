import React, { useState } from "react";

export default function AddPokemonForm({ onAddPokemon }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPokemon = {
      name,
      type,
      url,
    };
    onAddPokemon(newPokemon);
    setName("");
    setType("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        value={type}
        onChange={(event) => setType(event.target.value)}
      />
      <input
        type="text"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <button type="submit">Add Pokemon</button>
    </form>
  );
}
