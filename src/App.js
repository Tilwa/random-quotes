import React, { Component } from "react";
import "./App.css";

////////////////////////////// App //////////////////////////////////////
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
          author: "Thomas Edison",
        },
        {
          text: "You can observe a lot just by watching.",
          author: "Yogi Berra",
        },
        {
          text: "A house divided against itself cannot stand.",
          author: "Abraham Lincoln",
        },
        {
          text: "Difficulties increase the nearer we get to the goal.",
          author: "Johann Wolfgang von Goethe",
        },
        {
          text: "Fate is in your hands and no one elses",
          author: "Byron Pulsifer",
        },
      ],
    };
  }

  changeQuoteHandler = (props) => {
    console.log("clicked ");
  };
  render() {
    let number =
      this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    return (
      <div className="App">
        <h2 id="heading">Random Quote Machine</h2>
        <Box random={number} change={this.changeQuoteHandler} />
      </div>
    );
  }
}
////////////////////////////// App //////////////////////////////////////

////////////////////////////// Box //////////////////////////////////////
const Box = (props) => {
  return (
    <div id="quote-box">
      <h1 id="text">{props.random.text}</h1>
      <h4 id="author">~ {props.random.author}</h4>
      <button id="button1">Tweet</button>
      <button id="button2" onClick={props.change}>
        Next Quote
      </button>
    </div>
  );
};
////////////////////////////// Box //////////////////////////////////////

export default App;
