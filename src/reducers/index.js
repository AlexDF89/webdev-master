import { combineReducers } from 'redux';

import { default as menu } from './menu';
import { default as portfolio } from './portfolio';
import { default as portfolioFilter } from './portfolioFilter';

const reducer = combineReducers({
  menu,
  portfolio,
  portfolioFilter
});

export default reducer;