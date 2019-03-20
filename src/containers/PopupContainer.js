import { connect } from 'react-redux';

import Popup from '../components/Popup';
import { closePopup } from '../actions';

function mapStateToProps(state) {
  return {
    popup: state.popup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClosePopup: popup => dispatch(closePopup(popup))
  };
}

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);

export default PopupContainer;