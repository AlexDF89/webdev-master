import React from 'react';

function Home(props) {
  return (
    <main>
      <section className="first-screen home-page">

        <h1>
          <div>{ props.home.specialization }</div>
          <div>{ props.home.developerName }</div>
        </h1>
        <div>{ props.home.desc }</div>
        <div>{ props.home.mail }</div>
      </section>
    </main>
  );
}

export default Home;