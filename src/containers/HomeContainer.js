import { connect } from 'react-redux';

import { setPopup } from '../actions';
import Home from '../components/pages/Home';

function mapDispatchToProps(dispatch) {
  return {
    onSetPopup: popup => dispatch(setPopup(popup))
  };
}

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;