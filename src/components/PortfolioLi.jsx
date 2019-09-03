import React from 'react';
import PropTypes from 'prop-types';

function PortfolioLi(props) {
  return (
    <li className={`portfolio-nav_li ${props.active ? 'portfolio-li-active': ''}`} onClick={props.onClick}>{props.title}</li>
  );
}

PortfolioLi.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default PortfolioLi;