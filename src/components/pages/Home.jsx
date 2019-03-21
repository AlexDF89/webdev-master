import React from 'react';
import Button from '../Button';
import Social from '../Social';
import PopupContainer from '../../containers/PopupContainer';

function Home(props) {
  return (
    <main>
      <section className="first-screen home-page">

        <h1>
          <div className="h1-spec">Веб-разработчик</div>
          <div className="h1-name">Александр <nobr>Дюков-Франци</nobr> </div>
        </h1>
        <div className="home-page_desc">Профессиональная разработка сайтов</div>
        <div>
					<a className="home-page_mail" href="mailto:AlexDF89@yandex.ru">AlexDF89@yandex.ru</a>
				</div>
				<Button onClick={() => props.onSetPopup(true)} text="Связаться со мной" />
        <Social />

        <PopupContainer classes="home-popup" />
      </section>
    </main>
  );
}

export default Home;