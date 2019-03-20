import { connect } from 'react-redux';

import { openPopup } from '../actions';
import Home from '../components/pages/Home';

function mapDispatchToProps(dispatch) {
  return {
    onSetPopup: popup => dispatch(openPopup(popup))
  };
}

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;