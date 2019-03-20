import { OPEN_POPUP, CLOSE_POPUP } from '../actions';

export default function reducer( state = false, action ) {
  switch (action.type) {
    case OPEN_POPUP:
      return action.popup; 

    case CLOSE_POPUP:
      return action.popup;
      
    default: 
      return state;
  }
}