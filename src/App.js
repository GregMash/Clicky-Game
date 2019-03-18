import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/index";
import Navbar from "./components/Navbar/index";
import Card from "./components/Card/index";
import Footer from "./components/Footer/index";
import characters from "./characters.json";

class App extends Component {
  /* Setting state. 
  Characters is the array of json for each South Park character
  Score and High Score starts at 0 and is incremented
  clicked is an empty array that becomes populated with the id's of each character as they are clicked. It acts as the check to see if the character has already been clicked.   */
  state = {
    characters,
    score: 0,
    highScore: 0,
    clicked: []
  };
  // This method will shuffle the cards and display them in random postions when each is clicked.
  shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
  /* This method calls the shuffle method on each click
  It then checks to see if the clicked item has already been clicked.
  If it has been clicked, it resets the game
  Otherwise, it then checks if the current score is larger than the high score.
  If it is larger, it updates both the score and high score + 1.
  It also adds the id of the clicked item to the clicked array for future checking
  Otherwise, it only updates the current score and adds the id into the clicked array.   */
  cardClick = (e) => {
    this.shuffleCards(characters);
    let idClicked = e.target.id;
    if (this.state.clicked.includes(idClicked)) {
      this.setState({
        clicked: [],
        score: 0,
        characters: characters
      });
      alert("Oops, You already clicked this person. Try Again!");
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
      };
    };
  };
  // Rendering
  render() {
    return (
      <div className="container-fullwidth">
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
        <Footer />
      </div>
    );
  }
}

export default App;