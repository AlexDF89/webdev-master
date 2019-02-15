import { combineReducers } from 'redux';

import { default as menu } from './menu';
import { default as home } from './home';
import { default as about } from './about';

const reducer = combineReducers({
  menu,
  home,
  about
});

export default reducer;