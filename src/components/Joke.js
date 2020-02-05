import React from "react";
import PropTypes from "prop-types";

const Joke = props => {
  const { setup, punchline } = props;
  return (
    <div>
      <h1>{setup}</h1>
      <h1>{punchline}</h1>
    </div>
  );
};

Joke.propTypes = {
  setup: PropTypes.string,
  punchline: PropTypes.string
};

export default Joke;
