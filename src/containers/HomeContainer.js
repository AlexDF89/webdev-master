import { connect } from 'react-redux';

import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;