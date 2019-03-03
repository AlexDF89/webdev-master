import { createStore } from 'redux';

import reducer from '../reducers';

const getState = () => {
  return {
    menu: [
      {
        id: '/',
        text: "Главная",
        active: true
      },
      {
        id: '/portfolio',
        text: "Портфолио",
        active: false
      },
      {
        id: '/contacts',
        text: "Контакты",
        active: false
      }
    ]
  };
}

const store = createStore(reducer, getState());

export default store;