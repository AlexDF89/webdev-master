import React from 'react';
import PropTypes from 'prop-types';

import PortfolioLi from './PortfolioLi';

function PortfolioFilter(props) {
  return (
    <nav className="portfolio-nav">
      <ul className="portfolio-nav_ul">
        <PortfolioLi active={props.state.portfolioFilter === 'ALL'} title="Все" onClick={() => props.onSetPortfolioFilter('ALL')} />
        <PortfolioLi active={props.state.portfolioFilter === 'FL'} title="FL" onClick={() => props.onSetPortfolioFilter('FL')} />
        <PortfolioLi active={props.state.portfolioFilter === 'Github'} title="Github" onClick={() => props.onSetPortfolioFilter('Github')} />
        <PortfolioLi active={props.state.portfolioFilter === 'Games'} title="Games" onClick={() => props.onSetPortfolioFilter('Games')} />
      </ul>
    </nav>
  );
}

PortfolioFilter.propTypes = {
  onSetPortfolioFilter: PropTypes.func,
  state: PropTypes.shape({
    portfolioFilter: PropTypes.string
  })
};

export default PortfolioFilter;