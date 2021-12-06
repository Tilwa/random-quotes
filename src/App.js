import React, { Component } from "react";
import "./App.css";

////////////////////////////// App //////////////////////////////////////
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          id: 1,
          text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
          author: "Thomas Edison",
        },
        {
          id: 2,
          text: "You can observe a lot just by watching.",
          author: "Yogi Berra",
        },
        {
          id: 3,
          text: "A house divided against itself cannot stand.",
          author: "Abraham Lincoln",
        },
        {
          id: 4,
          text: "Difficulties increase the nearer we get to the goal.",
          author: "Johann Wolfgang von Goethe",
        },
        {
          id: 5,
          text: "Fate is in your hands and no one elses",
          author: "Byron Pulsifer",
        },
      ],
      position: null,
    };
  }

  changeQuoteHandler = (number) => {
    console.log("working");
    this.setState({ position: number });
  };
  render() {
    let number =
      this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];

    return (
      <div className="App">
        <h2 id="heading">Random Quote Machine</h2>
        <Box
          key={this.state.quotes.id}
          random={number}
          change={() => this.changeQuoteHandler(number)}
        />
      </div>
    );
  }
}
////////////////////////////// App //////////////////////////////////////

////////////////////////////// Box //////////////////////////////////////
const Box = (props) => {
  const twitter = props.random;
  let txt = twitter.text.toString();
  let athr = twitter.author.toString();
  console.log("Quote = " + txt + " author = " + athr);

  return (
    <div id="quote-box">
      <h1 id="text">&#8220; {props.random.text}&#8221;</h1>
      <h4 id="author">~ {props.random.author}</h4>
      <button id="button1">
        <a
          className="twitter-share-button"
          text={txt}
          href="https://twitter.com/intent/tweet?text=It's%20working:)"
          data-size="large"
        >
          Tweet
        </a>
      </button>

      <button id="button2" onClick={props.change}>
        Next Quote
      </button>
    </div>
  );
};
////////////////////////////// Box //////////////////////////////////////

export default App;
