import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
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
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIndx = Math.floor(Math.random() * hand2.length);
      let randPok = hand2.splice(randIndx, 1)[0];
      hand1.push(randPok);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.baseExp, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.baseExp, 0);

    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    );
  }
}

export default Pokegame;