import * as Types from "./actionTypes";
import axios from "axios";

export function jokeHasError(bool) {
  return {
    type: Types.JOKE_HAS_ERROR,
    hasError: bool
  };
}
export function jokeIsLoading(bool) {
  return {
    type: Types.JOKE_IS_LOADING,
    isLoading: bool
  };
}
export function jokeFetchDataSuccess(joke) {
  return {
    type: Types.JOKE_FETCH_DATA_SUCCESS,
    joke
  };
}

// action creator
export function jokeFetchData(url) {
  return dispatch => {
    dispatch(jokeIsLoading(true));
    axios
      .get(url, { headers: { Accept: "text/plain" } })
      .then(joke => {
        speechSynthesis.speak(new SpeechSynthesisUtterance(joke.data.setup));
        speechSynthesis.speak(
          new SpeechSynthesisUtterance(joke.data.punchline)
        );
        console.log(joke.data);
        // console.log(joke);
        return dispatch(jokeFetchDataSuccess(joke));
      })
      .catch(() => dispatch(jokeHasError(true)));
  };
}
