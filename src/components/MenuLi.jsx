import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLi(props) {
  return (
    <li className={props.classes + ' ' + (props.active ? ' active-menu-li' : '')} onClick={props.onClick}>
      <NavLink className="nav-a" exact to={props.menuId} activeClassName="active-menu-a">{props.text}</NavLink>
    </li>
  );
}

export default MenuLi;