import { connect } from 'react-redux';

import Portfolio from '../components/pages/Portfolio';

function getPortfolio(state) {
  if (state.portfolioFilter === 'ALL') return state.portfolio;
  return state.portfolio.filter(item => {
    let result = false;
    item.type.forEach( elem => { if (elem  === state.portfolioFilter) result = true });
    return result;
  });
}

function mapStateToProps(state) {
  return {
    portfolio: getPortfolio(state)
  }
}

const PortfolioContainer = connect(mapStateToProps)(Portfolio);

export default PortfolioContainer;