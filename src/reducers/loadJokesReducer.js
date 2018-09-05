import * as Types from '../actions/actionTypes';

const initialState = {
  setup: 'Want to hear a joke?',
  punchline: ''
}

export function jokeHasError(state = false, action) {
  switch (action.type) {
      case Types.JOKE_HAS_ERROR:
          return action.hasError;
      default:
          return state;
  }
}
export function jokeIsLoading(state = false, action) {
  switch (action.type) {
      case Types.JOKE_IS_LOADING:
          return action.isLoading;
      default:
          return state;
  }
}
export function joke(state = initialState, action) {
  switch (action.type) {
      case Types.JOKE_FETCH_DATA_SUCCESS:
          return {
              setup: action.joke.data.setup,
              punchline: action.joke.data.punchline
          }
      default:
          return state;
  }
}