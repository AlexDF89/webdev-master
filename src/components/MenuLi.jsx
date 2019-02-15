import React from 'react';

function MenuLi(props) {
  return (
    <li className={'nav_li' + (props.active ? ' active-menu' : '')} onClick={props.onClick}>
      <a href={props.menuId}>{props.text}</a>
    </li>
  );
}

export default MenuLi;