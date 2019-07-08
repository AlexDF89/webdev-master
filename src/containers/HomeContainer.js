import { connect } from 'react-redux';

import { openPopup } from '../actions';
import Home from '../components/pages/Home';

function mapStateToProps(state) {
  return {
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetPopup: popup => dispatch(openPopup(popup))
  };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;