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
    this.setState({ position: number });
  };

  render() {
    let number =
      this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];

    return (
      <div className="App">
        <div id="bg">
          <Box
            key={this.state.quotes.id}
            random={number}
            change={() => this.changeQuoteHandler(number)}
          />
        </div>
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

  let text = props.random.text;

  let colors = [
    "#F4C2C2",
    "#BFFF00",
    "#AF6E4D",
    "#FFFF99",
    "#6D9BC3",
    "#AD6F69",
    "#00B7EB",
    "#F0EAD6",
    "#BF00FF",
    "#C19A6B",
    "#E5AA70",
    "#E95C4B",
    "#5FA777",
    "#D473D4",
    "#77B5FE",
  ];
  colors = colors[Math.floor(Math.random() * colors.length)];

  const bg = {
    backgroundColor: colors,
  };
  return (
    <div id="quote-box" style={bg}>
      <h1 id="text">&#8220; {props.random.text}&#8221;</h1>
      <h4 id="author">~ {props.random.author}</h4>

      <button id="button1" style={bg}>
        <a
          href={`http://twitter.com/intent/tweet/?text= ${text}`}
          target="_blank"
        >
          Tweet
        </a>
      </button>

      <button id="button2" onClick={props.change} style={bg}>
        Next Quote
      </button>
    </div>
  );
};
////////////////////////////// Box //////////////////////////////////////

export default App;
