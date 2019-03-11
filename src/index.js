import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import { getMenu } from './actions';
import { getPortfolioFL } from './actions';
import { getPortfolioGit } from './actions';

store.dispatch(getMenu());
store.dispatch(getPortfolioFL());
store.dispatch(getPortfolioGit());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
