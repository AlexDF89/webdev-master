import React from 'react';

function PortfolioLi(props) {
  return (
    <li className={`portfolio-nav_li ${props.active ? 'portfolio-li-active': ''}`} onClick={props.onClick}>{props.title}</li>
  );
}

export default PortfolioLi;