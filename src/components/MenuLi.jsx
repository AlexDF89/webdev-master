import React from 'react';

function MenuLi(props) {
  return (
    <li className={'nav_li' + (props.active ? ' active-menu' : '')} onClick={props.onClick}>{props.text}</li>
  );
}

export default MenuLi;