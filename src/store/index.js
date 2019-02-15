import { createStore } from 'redux';

import reducer from '../reducers';

const getState = () => {
  return {
    menu: [
      {
        id: 1,
        text: "Главная",
        active: true
      },
      {
        id: 2,
        text: "О себе",
        active: false
      },
      {
        id: 3,
        text: "Портфолио",
        active: false
      }
    ],
    content: [
      {
        id: 1,
        h1: 'Главная страница'
      },
      {
        id: 2,
        h1: 'О себе'
      },
      {
        id: 3,
        h1: 'Мое портфолио'
      }
    ]
  };
}

const store = createStore(reducer, getState());

export default store;