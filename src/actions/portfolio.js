export const SET_PORTFOLIO_CONTENT  = 'SET_PORTFOLIO_CONTENT';

export function setPortfolioContent(portfolio) {
  return {
    type: SET_PORTFOLIO_CONTENT,
    portfolio
  };
}