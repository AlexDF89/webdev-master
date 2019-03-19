import { SET_POPUP } from '../actions';

export default function reducer( state = false, action ) {
  switch (action.type) {
    case SET_POPUP:
      return action.popup; 
      
    default: 
      return state;
  }
}