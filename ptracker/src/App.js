import React, { Component } from 'react';

import './App.css';
import Players from './players/Players.js'

class App extends Component {
  state = {
    greeting: '',
    players: [
      {id: 1, name: 'Nate'}, 
      {id: 2, name:'Kayanna'},
      {id: 3, name: 'Rudy'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div>
          <button onClick={this.greet}>Greet</button>
          <div>{this.state.greeting}</div>
        </div>
        <Players players={this.state.players} />
      </div>
    );
  }

  greet = () => {
    this.setState({
      greeting: 'Hello Web XVI'
    });
  }
}

export default App;
