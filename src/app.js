import React, { Component } from 'react';
import Scores from './components/Scores';
import Pictures from './components/Pictures';
import Export from './components/Export'

class App extends Component {

  state = {
    message: "Choose an image only once",
    Pics: pics,
    score: 0,
    highscore: 0,
  }

  mathRandom = item => {
    for (let x = item.length - 1; x > 0; x--) {
        let y = Math.floor(Math.random() * (x + 1));
        [item[x], item[y]] = [item[y], item[x]];
    }
}

  picSelect = name => {
    const selected = this.state.notPicked.find(data => data.name === name);
    if (selected === undefined){
      this.setState({
        message: "Wrong!",
        pics: pics,
        score: 0,
        highscore: (this.state.score > this.state.highscore ? this.state.score : this.state.highscore),
        notPicked: pics
      })
    }
    else {
      const correct = this.state.notPicked.filter(data => data.name !== name);
      this.setState({
        message: "Correct!",
        pics: pics,
        score: this.state.score + 1,
        notPicked: correct
      });
    }
    this.mathRandom(pics);
  };

  render() {
    return (
      
      <Export>
      <Scores 
      message={this.state.message}
      score={this.state.score}
      highscore={this.state.highscore}
      />

      {this.state.pics.map(data => (
        <Pictures
          picSelect={this.picSelect}
          name={data.name}
          image={data.image}
          alt={data.name}
        />
      ))}
      </Export>
    
    );
  }
}

export default App;