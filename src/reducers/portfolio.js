import { GET_PORTFOLIO_FL, GET_PORTFOLIO_GIT, SET_PORTFOLIO_CONTENT, GET_PORTFOLIO_GAMES } from '../actions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case GET_PORTFOLIO_FL:
      return state.concat(action.portfolio);

    case GET_PORTFOLIO_GIT:
      return state.concat(action.portfolio);

    case GET_PORTFOLIO_GAMES:
      return state.concat(action.portfolio);

    case SET_PORTFOLIO_CONTENT:
      return state;

    default:
      return state;
  }
}