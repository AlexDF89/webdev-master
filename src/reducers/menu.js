import { SET_MENU } from '../actions';

export default function reducer( state = [], action ) {
  switch (action.type) {
    case SET_MENU:
      return state.map(elem => {
        elem.active = false;
        if (elem.id === action.id) elem.active = true;
        return elem;
      });
      
    default: 
      return state;
  }
}