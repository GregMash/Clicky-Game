/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/index";
import Navbar from "./components/Navbar/index";
import Card from "./components/Card/index";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0,
    clicked: []
  };


  shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  handleHighScore = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({ highScore: this.state.score })
    }
  }

  cardClick = (e) => {
    this.shuffleCards(characters);
    let idClicked = e.target.id;
    if (this.state.clicked.includes(idClicked)) {
      this.setState({
        clicked: [],
        score: 0,
        characters: characters
      });
    } else {
      if (this.state.score >= this.state.highScore) {
        this.setState({
          score: this.state.score + 1,
          highScore: this.state.score + 1,
          characters: characters,
          clicked: this.state.clicked.concat(idClicked)
        });
      } else {
        this.setState({
          score: this.state.score + 1,
          characters: characters,
          clicked: this.state.clicked.concat(idClicked)
        });
      }
    }
  }


  render() {
    return (
      <div className="container">
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        {this.state.characters.map(character => (
          <Card
            cardClick={this.cardClick}
            key={character.id}
            name={character.name}
            image={character.image}
            id={character.id}
          />
        ))}
      </div>
    );
  }
}

export default App;