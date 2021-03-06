import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Social from '../Social';
import PopupContainer from '../../containers/PopupContainer';

function Home(props) {
  return (
    <main>
      <section className="first-screen home-page">
          
        <div className="message">
          {props.form.mes ?  <div className="message-text">{props.form.mes}</div>  : '' }
        </div>

        <h1>
        	<div className="home-page_desc">Профессиональная разработка сайтов</div>
        </h1>
        <div className="h1-spec">Веб-разработчик</div>
        <div className="h1-name">Александр <nobr>Дюков-Франци</nobr> </div>
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

Home.propTypes = {
  form: PropTypes.exact({
    mes: PropTypes.string,
    ok: PropTypes.bool
  })
};

export default Home;