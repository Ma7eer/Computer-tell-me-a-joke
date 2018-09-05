import { combineReducers } from 'redux';
import { joke, jokeIsLoading, jokeHasError } from './loadJokesReducer';

export default combineReducers({
  joke,
  jokeIsLoading,
  jokeHasError
});