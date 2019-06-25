import axios from 'axios';

export const GET_PORTFOLIO_FL = 'GET_PORTFOLIO_FL';
export const GET_PORTFOLIO_GIT = 'GET_PORTFOLIO_GIT';
export const GET_PORTFOLIO_GAMES = 'GET_PORTFOLIO_GAMES';
export const SET_PORTFOLIO_CONTENT  = 'SET_PORTFOLIO_CONTENT';

export function getPortfolioFL() {
  return dispatch => {
    return axios.get('api/getPortfolioFL')
      .then(response => response.data)
      .then(portfolio => {
        return dispatch({
          type: GET_PORTFOLIO_FL,
          portfolio
       })
      })
      .catch(err => console.error(err.message));
  };
}

export function getPortfolioGit() {
  return dispatch => {
    return axios.get('api/getPortfolioGit')
      .then(response => response.data)
      .then(portfolio => dispatch({
        type: GET_PORTFOLIO_GIT,
        portfolio
      }))
      .catch(err => console.error(err.message));
  };
}

export function getPortfolioGames() {
  return dispatch => {
    return axios.get('api/getPortfolioGames')
      .then(response => response.data)
      .then(portfolio => {
        dispatch({
        type: GET_PORTFOLIO_GAMES,
        portfolio
      })})
      .catch(err => console.error(err.message));
  };
}

export function setPortfolioContent(portfolio) {
  return {
    type: SET_PORTFOLIO_CONTENT,
    portfolio
  };
}