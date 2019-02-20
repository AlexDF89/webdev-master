import { connect } from 'react-redux';

import Portfolio from '../components/Portfolio';

function mapStateToProps(state) {
  return {
    portfolio: state.portfolio
  }
}

const PortfolioContainer = connect(mapStateToProps)(Portfolio);

export default PortfolioContainer;