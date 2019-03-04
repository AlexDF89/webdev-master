import React from 'react';

import PortfolioFilterContainer from '../../containers/PortfolioFilterContainer';
import PortfolioItem from '../PortfolioItem';

function Portfolio(props) {
  return (
    <main>
      <section className="first-screen">
        <div className="portfolio-wrapper">
          <h1>Мое портфолио</h1>

          <PortfolioFilterContainer />

          <ul className="portfolio-list">
            {props.portfolio.map(item => 
              <PortfolioItem title={item.title} />
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;