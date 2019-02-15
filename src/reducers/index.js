import { combineReducers } from 'redux';

import { default as menu } from './menu';
import content, * as fromContent from './content';

const reducer = combineReducers({
  menu,
  content
});

export default reducer;

export function getActiveContent(state) {
  return fromContent.getActiveContent(state)
}