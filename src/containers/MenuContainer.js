import { connect } from 'react-redux';

import { setMenu } from '../actions';
import Menu from '../components/Menu';

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetMenu: id => dispatch(setMenu(id))
  };
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;