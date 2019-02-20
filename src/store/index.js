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
      },
      {
        id: '/contacts',
        text: "Контакты",
        active: false
      }
    ],
    home: {
      id: '/',
      h1: 'Главная страница',
      specialization: 'Веб-разработчик',
      developerName: 'Александр Дюков-Франци',
      desc: 'Профессиональная разработка сайтов',
      mail: 'AlexDF89@yandex.ru'
    },
    about: {
      id: '/about',
      h1: 'О себе'
    },
    portfolio: {
      id: '/portfolio',
      h1: 'Мое портфолио'
    },
    contacts: {
      id: '/contacts',
      h1: 'Мои контакты'
    }
  };
}

const store = createStore(reducer, getState());

export default store;