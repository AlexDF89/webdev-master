import { combineReducers } from 'redux';

import { default as menu } from './menu';
import { default as portfolio } from './portfolio';
import { default as portfolioFilter } from './portfolioFilter';
import { default as popup } from './popup';
import { default as form } from './form';

const reducer = combineReducers({
  menu,
  portfolio,
  portfolioFilter,
  popup,
  form
});

export default reducer;