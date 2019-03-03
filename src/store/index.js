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
		],
		portfolio: [
			{
				id: '/FL',
				text: 'FL',
				active: false
			},
			{
				id: '/Github',
				text: 'Github',
				active: false
			},
			{
				id: '/Games',
				text: 'Games',
				active: false
			}

		]
  };
}

const store = createStore(reducer, getState());

export default store;