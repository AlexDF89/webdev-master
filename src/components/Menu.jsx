import React from 'react';
import PropTypes from 'prop-types';

import MenuLi from './MenuLi';

function Menu(props) {
  return (
    <nav className="wrapper-nav">
      <input id="hamburger-checkbox" className="hamburger-checkbox" type="checkbox" />
      <div className="hamburger">
        <label className="hamburger-label" htmlFor="hamburger-checkbox">
          <p className="hamburger-btn"></p>
        </label>
      </div>
      <ul className="nav-ul">
        {props.menu.map( menu => 
          <MenuLi
            menuId={menu.id}
            key={menu.id}
            active={menu.active}
            text={menu.text} 
						classes='nav_li'
						onClick={() => props.onSetMenu(menu.id)}
          />)
        }
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  onSetMenu: PropTypes.func,
  menu: PropTypes.arrayOf(PropTypes.exact({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  }))
};

export default Menu;