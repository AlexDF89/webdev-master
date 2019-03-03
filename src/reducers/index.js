import { combineReducers } from 'redux';

import { default as menu } from './menu';
import { default as portfolio } from './portfolio';

const reducer = combineReducers({
  menu,
  portfolio
});

export default reducer;