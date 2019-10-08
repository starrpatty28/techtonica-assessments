import React, { Component } from "react";
import axios from "axios";


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planet: null
    }
    this.onClick = this.onclick.bind(this);
  }


onclick() {
  const num = this.getRandomNumber();
  this.getPlanet(num)
}

getRandomNumber() {
  return Math.floor(Math.random() * 60) + 1;
}

getPlanet(num) {
  const url = `https://swapi.co/api/planets/${num}`
  console.log(url);

  axios.get(url)
  .then(response => {
    this.setState({
      planet: response.data.name
      });
    });
  } 

  render() {
    return (
      <div className="App">
        <img src="https://media.giphy.com/media/fBfjePsZTC6w8/giphy.gif" 
        alt="Stars Wars">
        </img>
        <h1>{this.state.planet}</h1>
        <button type="button" onClick={this.onClick}>
          Click Me!
          </button>
      </div>
    );
  }
  
}

export default App;
