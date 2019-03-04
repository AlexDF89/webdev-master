export const SET_PORTFOLIO_FILTER  = 'SET_PORTFOLIO_FILTER';

export function setPortfolioFilter(filter) {
  return {
    type: SET_PORTFOLIO_FILTER,
    filter
  };
}