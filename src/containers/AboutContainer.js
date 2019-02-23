import { connect } from 'react-redux';

import About from '../components/pages/About';

function mapStateToProps(state) {
  return {
    about: state.about
  }
}

const AboutContainer = connect(mapStateToProps)(About);

export default AboutContainer;