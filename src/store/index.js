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
				type: ['FL'],
				title: 'Портфолио FL 1',
				src: './images/portfolio/123.jpg',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea neque quae placeat natus delectus, corporis ratione modi commodi unde minus, cum dolorum aspernatur? In magni autem dolor blanditiis eos corrupti.'
			},
			{
				type: ['FL'],
				title: 'Портфолио FL 2',
				src: './images/portfolio/1234.jpg',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at rem omnis odio ad vero amet delectus. Sequi culpa deserunt commodi eius corporis vero placeat consequatur facere tempore, necessitatibus minus cupiditate expedita vel, suscipit dolorum officiis temporibus quaerat non? Provident, beatae. Itaque, non doloremque. Esse saepe, quaerat dolorum natus temporibus beatae recusandae dolorem consectetur aut eligendi autem quos quidem? Assumenda labore quaerat explicabo porro obcaecati laborum ad nobis nulla adipisci quidem sed maiores eius ipsa ipsum ipsam a mollitia soluta neque natus, incidunt odit enim! Voluptas error quas, ad quisquam accusamus, dicta suscipit quidem vero placeat maiores, voluptatem maxime nemo!'
			},
			{
				type: ['Github'],
				title: 'Портфолио Github 1',
				src: '',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at rem omnis odio ad vero amet delectus. Sequi culpa deserunt commodi eius corporis vero placeat consequatur facere tempore, necessitatibus minus cupiditate expedita vel, suscipit dolorum officiis temporibus quaerat non?'
			},
			{
				type: ['Games', 'Github'],
				title: 'Портфолио Games 1',
				src: '',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum ipsa temporibus dolorem odit quis velit vero at, distinctio aut. Deserunt hic animi saepe sunt at reiciendis id voluptate officiis in tempora nobis vel qui nihil, excepturi facilis obcaecati praesentium unde est sint temporibus fuga atque recusandae? Vero, non ratione!'
			},
			{
				type: ['Github'],
				title: 'Портфолио Github 2',
				src: '',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat, eos qui maiores esse repudiandae ut dicta! Recusandae nobis maiores aut quia possimus, obcaecati iure quae labore accusamus blanditiis! Explicabo ad possimus excepturi in error, iste aliquam ab eligendi quod hic? Harum numquam consequuntur officia dolor quia ipsam culpa nemo aspernatur. Dolore incidunt ipsum sit nesciunt ratione? Iure neque atque earum vel adipisci eligendi ipsum? Neque qui quibusdam vel adipisci!'
			},
			{
				type: ['Games', 'Github'],
				title: 'Портфолио Games 2',
				src: '',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat, eos qui maiores esse repudiandae ut dicta! Recusandae nobis maiores aut quia possimus, obcaecati iure quae labore accusamus blanditiis! Explicabo ad possimus excepturi in error, iste aliquam ab eligendi quod hic? Harum numquam consequuntur officia dolor quia ipsam culpa nemo aspernatur.'
			},
			{
				type: ['Games', 'Github'],
				title: 'Портфолио Games 2',
				src: '',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat, eos qui maiores esse repudiandae ut dicta! Recusandae nobis maiores aut quia possimus, obcaecati iure quae labore accusamus blanditiis! Explicabo ad possimus excepturi in error, iste aliquam ab eligendi quod hic? Harum numquam consequuntur officia dolor quia ipsam culpa nemo aspernatur.'
			},
			{
				type: ['Games', 'Github'],
				title: 'Портфолио Games 2',
				src: '',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat, eos qui maiores esse repudiandae ut dicta! Recusandae nobis maiores aut quia possimus, obcaecati iure quae labore accusamus blanditiis! Explicabo ad possimus excepturi in error, iste aliquam ab eligendi quod hic? Harum numquam consequuntur officia dolor quia ipsam culpa nemo aspernatur.'
			}
    ],
    portfolioFilter: 'ALL'
  };
}

const store = createStore(reducer, getState());

export default store;