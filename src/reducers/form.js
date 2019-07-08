import { SEND_FORM } from '../actions';

export default function reducer( state = {ok: false}, action ) {
  switch (action.type) {
    case SEND_FORM:
      return action.form
      
    default: 
      return state;
  }
}