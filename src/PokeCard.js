import React, { Component } from "react";
import "./PokeCard.css";
const PokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokeCard extends Component {
  render() {
    let imgSrc = `${PokeAPI}${padToThree(this.props.id)}.png`;
    return (
      <div className="PokeCard">
        <h1 className="PokeCard-title">{this.props.name}</h1>
        <div className="PokeCard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="PokeCard-data">Type: {this.props.type}</div>
        <div className="PokeCard-data">Exp: {this.props.baseExp}</div>
      </div>
    );
  }
}

export default PokeCard;
