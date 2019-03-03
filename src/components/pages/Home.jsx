import React from 'react';
import Button from '../Button';
import Social from '../Social';

function Home(props) {
  return (
    <main>
      <section className="first-screen home-page">

        <h1>
          <div className="h1-spec">Веб-разработчик</div>
          <div className="h1-name">Александр Дюков-Франци</div>
        </h1>
        <div className="home-page_desc">Профессиональная раработка сайтов</div>
        <div>
					<a className="home-page_mail" href="mailto:AlexDF89@yandex.ru">AlexDF89@yandex.ru</a>
				</div>
				<Button text="Связаться со мной" />
        <Social />
      </section>
    </main>
  );
}

export default Home;