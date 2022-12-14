import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Exp: {this.props.exp}</h4>
        <div className="Pokedex-cards">
        {this.props.pokemon.map((p) => (
          <PokeCard id={p.id} name={p.name} type={p.type} baseExp={p.baseExp} />
        ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
