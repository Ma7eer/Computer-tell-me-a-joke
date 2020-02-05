import React, { Component } from "react";
import { connect } from "react-redux";
import { jokeFetchData } from "./actions/loadJokeAction";
import PropTypes from "prop-types";
import "./App.css";

import Joke from "./components/Joke";
import SquareButton from "./components/SquareButton";
import CircleButton from "./components/CircleButton";

class App extends Component {
  state = {
    buttonValue: "tell me a joke!"
  };

  handleLaughButtonClick = () => {
    if (this.props.joke.setup === "Want to hear a joke?") {
      speechSynthesis.speak(
        new SpeechSynthesisUtterance("tell me a joke first!")
      );
    } else {
      const utterance = new SpeechSynthesisUtterance("HA HA");
      utterance.pitch = 2; //1.5
      utterance.volume = 1;
      utterance.rate = 8;
      speechSynthesis.speak(utterance);
    }
  };

  handleJokeButtonClick = e => {
    e.preventDefault();
    // this.props.fetchData("https://icanhazdadjoke.com/");
    this.props.fetchData("https://official-joke-api.appspot.com/random_joke");
  };

  render() {
    const { joke } = this.props;
    // console.log(joke);
    return (
      <div className="app">
        <Joke setup={joke.setup} punchline={joke.punchline} />
        <div className="buttons">
          <SquareButton
            buttonValue={this.state.buttonValue}
            onClick={this.handleJokeButtonClick}
          />
          <CircleButton onClick={this.handleLaughButtonClick} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  joke: PropTypes.object,
  jokeHasError: PropTypes.bool,
  jokeIsLoading: PropTypes.bool,
  fetchData: PropTypes.func
};

const mapStateToProps = state => {
  return {
    joke: state.joke,
    jokeHasError: state.jokeHasError,
    jokeIsLoading: state.jokeIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(jokeFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
