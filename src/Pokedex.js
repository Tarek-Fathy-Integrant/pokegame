import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", baseExp: 62 },
      { id: 7, name: "Squirtle", type: "water", baseExp: 63 },
      { id: 11, name: "Metapod", type: "bug", baseExp: 72 },
      { id: 12, name: "Butterfree", type: "flying", baseExp: 178 },
      { id: 25, name: "Pikachi", type: "electric", baseExp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", baseExp: 95 },
      { id: 94, name: "Gengar", type: "poison", baseExp: 225 },
      { id: 133, name: "Eevee", type: "normal", baseExp: 65 },
    ],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              baseExp={p.baseExp}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
