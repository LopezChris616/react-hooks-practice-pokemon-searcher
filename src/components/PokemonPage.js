import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  });

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(pokemon => setPokemonList(pokemon))
  }, []);

  const searchPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setNewPokemon={setNewPokemon} newPokemon={newPokemon} setPokemonList={setPokemonList} pokemonList={pokemonList} />
      <br />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <br />
      <PokemonCollection pokemonList={searchPokemon} />
    </Container>
  );
}

export default PokemonPage;
