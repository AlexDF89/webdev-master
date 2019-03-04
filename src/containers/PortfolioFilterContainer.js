import { connect } from 'react-redux';

import { setPortfolioFilter } from '../actions';
import PortfolioFilter from '../components/PortfolioFilter';

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetPortfolioFilter: filter => dispatch(setPortfolioFilter(filter))
  };
}

const PortfolioFilterContainer = connect(mapStateToProps, mapDispatchToProps)(PortfolioFilter);

export default PortfolioFilterContainer;