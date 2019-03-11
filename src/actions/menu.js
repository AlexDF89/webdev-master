import axios from 'axios';

export const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU';
export const GET_MENU = 'GET_MENU';

export function setActiveMenu(id) {
  return {
    type: SET_ACTIVE_MENU,
    id
  };
}

export function getMenu(menu) {
  return dispatch => {
    return axios.get('api/getMenu')
      .then(response => response.data)
      .then(menu => dispatch({
        type: GET_MENU,
        menu
      }))
      .catch(err => console.error(err));
  }
}