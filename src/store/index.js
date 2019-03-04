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
				type: 'FL',
				title: 'Портфолио FL 1'
			},
			{
				type: 'FL',
				title: 'Портфолио FL 2'
			},
			{
				type: 'Github',
				title: 'Портфолио Github 1'
			},
			{
				type: 'Games',
				title: 'Портфолио Games 1'
			},
			{
				type: 'Github',
				title: 'Портфолио Github 2'
			},
			{
				type: 'Games',
				title: 'Портфолио Games 2'
			}
    ],
    portfolioFilter: 'ALL'
  };
}

const store = createStore(reducer, getState());

export default store;