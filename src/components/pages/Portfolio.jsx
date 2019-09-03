import React from 'react';
import PropTypes from 'prop-types';

import PortfolioFilterContainer from '../../containers/PortfolioFilterContainer';
import PortfolioItem from '../PortfolioItem';

function Portfolio(props) {
  return (
    <main>
      <section className="first-screen">
      </section>
      <section className="second-screen">
        <div className="second-screen_in">
            <h1>Портфолио</h1>

            <PortfolioFilterContainer />

            <ul className="portfolio-list">
              {props.portfolio.map((item, i) => 
                <PortfolioItem item={item} key={i} />
              )}
            </ul>
          </div>
      </section>
    </main>
  );
}

Portfolio.propTypes = {
  portfolio: PropTypes.oneOfType([
    PropTypes.oneOf([]),
    PropTypes.arrayOf(PropTypes.exact({
      title: PropTypes.string,
      src: PropTypes.string,
      desc: PropTypes.string,
      href: PropTypes.string,
      type: PropTypes.array
    }))
  ])
};

export default Portfolio;