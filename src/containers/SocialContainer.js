import { connect } from 'react-redux';

import Social from '../components/Social';

function mapStateToProps(state) {
  return {
    social: state.social
  }
}

const SocialContainer = connect(mapStateToProps)(Social);

export default SocialContainer;