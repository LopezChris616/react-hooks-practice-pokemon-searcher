import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [spriteBackRender, setSpriteBackRender] = useState(false);

  function handleSpriteRender() {
    setSpriteBackRender(spriteRender => !spriteRender);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={spriteBackRender ? pokemon.sprites.back : pokemon.sprites.front} alt={pokemon.name} onClick={handleSpriteRender} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
