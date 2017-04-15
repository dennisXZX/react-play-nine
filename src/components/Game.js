import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

class Game extends Component {
  state = {
    selectedNumbers: [],
    // generate a random number, ranging from 1 - 9
    randomNumberOfStars: Math.floor(Math.random() * 9) + 1
  };

  selectNumber = (clickedNumber) => {
    // if the clicked number is already in the selectedNumbers array, ignore it
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    this.setState((prevState) => {
      return {selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)}
    });
  };

  unselectNumber = (clickedNumber) => {
    this.setState((prevState) => {
      return {selectedNumbers: prevState.selectedNumbers
                                        .filter((num) => num !== clickedNumber)}
    })
  }

  render() {
    // deconstruct from the state
    const { selectedNumbers, randomNumberOfStars } = this.state;
    return (
      <div className="container">
        <h3 className="header">Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber} />
        </div>
        <Numbers selectedNumbers={selectedNumbers}
                 selectNumber={this.selectNumber} />
      </div>
    );
  }
}

export default Game;