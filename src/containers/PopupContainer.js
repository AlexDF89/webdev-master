import { connect } from 'react-redux';

import Popup from '../components/Popup';

function mapStateToProps(state) {
  return {
    popup: state.popup
  };
}

const PopupContainer = connect(mapStateToProps)(Popup);

export default PopupContainer;