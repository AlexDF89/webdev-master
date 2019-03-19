import { combineReducers } from 'redux';

import { default as menu } from './menu';
import { default as portfolio } from './portfolio';
import { default as portfolioFilter } from './portfolioFilter';
import { default as popup } from './popup';

const reducer = combineReducers({
  menu,
  portfolio,
  portfolioFilter,
  popup
});

export default reducer;