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
        id: '/about',
        text: "О себе",
        active: false
      },
      {
        id: '/portfolio',
        text: "Портфолио",
        active: false
      }
    ],
    home: {
      id: '/',
      h1: 'Главная страница'
    },
    about: {
      id: '/about',
      h1: 'О себе'
    }
  };
}

const store = createStore(reducer, getState());

export default store;