import React from 'react';

function About(props) {
  return (
    <main>
      <section className="first-screen">
        <h1>{ props.about.h1 }</h1>      
      </section>
    </main>
  );
}

export default About;