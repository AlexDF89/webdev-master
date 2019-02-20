import React from 'react';
import PropTypes from 'prop-types';

import MenuLi from './MenuLi';

function Menu(props) {
  return (
    <nav className="wrapper-nav">
      <ul className="nav-ul">
        {props.menu.map( menu => 
          <MenuLi
            menuId={menu.id}
            active={menu.active}
            text={menu.text} 
            key={menu.id}
            onClick={() => props.onSetMenu(menu.id)}
          />)
        }
      </ul>
    </nav>
  );
}

MenuLi.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    menuId: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  }))
};

export default Menu;