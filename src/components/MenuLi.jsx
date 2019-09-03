import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuLi(props) {
  return (
    <li className={props.classes + ' ' + (props.active ? ' active-menu-li' : '')} onClick={props.onClick}>
      <NavLink className="nav-a" exact to={props.menuId} activeClassName="active-menu-a">{props.text}</NavLink>
    </li>
  );
}

MenuLi.propTypes = {
  menuId: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string
};

export default MenuLi;