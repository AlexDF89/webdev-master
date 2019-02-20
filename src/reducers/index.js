import { combineReducers } from 'redux';

import { default as menu } from './menu';
import { default as home } from './home';
import { default as about } from './about';
import { default as portfolio } from './portfolio';
import { default as contacts } from './contacts';

const reducer = combineReducers({
  menu,
  home,
  about,
  portfolio,
  contacts
});

export default reducer;