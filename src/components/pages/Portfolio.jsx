import React from 'react';

import PortfolioFilterContainer from '../../containers/PortfolioFilterContainer';
import PortfolioItem from '../PortfolioItem';

function Portfolio(props) {
  return (
    <main>
      <section className="first-screen">
      </section>
      <section className="second-screen">
        <div className="portfolio-wrapper">
            <h1>Мое портфолио</h1>

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

export default Portfolio;