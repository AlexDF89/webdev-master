import { SET_SOCIAL } from '../actions';

export default function reducer( state = [], action ) {
  switch (action.type) {
    case SET_SOCIAL:
      return state;
      
    default: 
      return state;
  }
}