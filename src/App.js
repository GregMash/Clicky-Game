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

gameOver = (id) => {
  if (this.state.clicked.includes(id)) {
    this.handleHighScore();
    this.shuffleCards(characters);
    this.setState({ 
      clicked: [],
      score: 0,
      characters: characters
    });
  }
}

handleScoreIncrement = () => {
  this.setState({ count: this.state.score + 1 })
}

shuffleCards = (cards) => {
  for (let i = cards.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

cardClick = (e) => {
  this.handleHighScore();
  this.setState({ count: this.state.score + 1})
}

handleHighScore = () => {
  if (this.state.score >= this.state.highScore) {
    this.setState({highScore: this.state.score})
  }
}

render() {
    return (
      <div className="container">
        <Navbar />
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