import React from 'react';

function Portfolio(props) {
  return (
    <main>
      <section className="first-screen">
        <h1>{ props.portfolio.h1 }</h1>
      </section>
    </main>
  );
}

export default Portfolio;