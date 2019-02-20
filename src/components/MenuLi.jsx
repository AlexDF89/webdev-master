import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLi(props) {
  return (
    <li className={'nav_li' + (props.active ? ' active-menu-li' : '')} onClick={props.onClick}>
      <NavLink className="nav-a" exact to={props.menuId} activeClassName="active-menu-a">{props.text}</NavLink>
    </li>
  );
}

export default MenuLi;