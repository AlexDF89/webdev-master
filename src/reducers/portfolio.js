import { SET_PORTFOLIO_CONTENT } from '../actions';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case SET_PORTFOLIO_CONTENT:
      return state
    default:
      return state;
  }
}