import React from 'react';
import Button from '../Button';
import Social from '../Social';

function Home(props) {
  return (
    <main>
      <section className="first-screen home-page">

        <h1>
          <div className="h1-spec">{ props.home.specialization }</div>
          <div className="h1-name">{ props.home.developerName }</div>
        </h1>
        <div className="home-page_desc">{ props.home.desc }</div>
        <div>
					<a className="home-page_mail" href={`mailto:${props.home.mail}`}>{ props.home.mail }</a>
				</div>
				<Button text="Связаться со мной" />
        <Social />
      </section>
    </main>
  );
}

export default Home;