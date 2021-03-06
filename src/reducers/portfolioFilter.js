import { SET_PORTFOLIO_FILTER } from '../actions';

export default function reducer(state = 'ALL', action) {
  switch(action.type) {
    case SET_PORTFOLIO_FILTER:
      return action.filter;

    default:
      return state;
  }
}