import { SET_ACTIVE_MENU, GET_MENU } from '../actions';

export default function reducer( state = [], action ) {
  switch (action.type) {
    case GET_MENU:
      return action.menu 
      
    case SET_ACTIVE_MENU:
      return state.map(elem => {
        elem.active = false;
        if (elem.id === action.id) elem.active = true;
        return elem;
      });
      
    default: 
      return state;
  }
}