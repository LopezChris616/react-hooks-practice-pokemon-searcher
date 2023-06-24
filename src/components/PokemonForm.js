import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setNewPokemon, newPokemon, setPokemonList, pokemonList }) {

  function handleInput(event) {
    setNewPokemon({
      ...newPokemon,
      [event.target.name]: event.target.value
    });
  }

  function handleNewPokemon(event) {
    event.preventDefault();

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: parseInt(newPokemon.hp),
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    })
      .then(res => res.json())
      .then(pokemon => {
        const newPokemonList = [...pokemonList, pokemon];
        setPokemonList(newPokemonList);
      });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleNewPokemon}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemon.name} onChange={handleInput} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemon.hp} onChange={handleInput} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.frontUrl}
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.backUrl}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
