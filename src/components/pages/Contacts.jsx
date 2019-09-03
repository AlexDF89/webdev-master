import React from 'react';
import PropTypes from 'prop-types';

import SocialLi from '../SocialLi';
import logoMail from '../../images/mail_icon.png';
import logoGit from '../../images/github_icon.svg';
import logoFL from '../../images/fl_icon.png';
import logoVK from '../../images/vk_icon.svg';
import FormContainer from '../../containers/FormContainer';



function Contacts(props) {
  return (
    <main>
      <section className="first-screen">
      </section>
      <section className="second-screen">
        <div className="second-screen_in">
          <h1>Контакты</h1>
          <p className="contacts-desc">Вы можете связаться со мной по указанным ниже контактам</p>
          <div className="contacts-wrap">

            <div className="contacts-item">
              <ul className="contacts-social">
                <SocialLi href="mailto:alexdf89@yandex.ru" imgSrc={logoMail} classLi="icon-git contacts-social-item" text="AlexDF89@yandex.ru" />
                <SocialLi href="https://github.com/AlexDF89" imgSrc={logoGit} classLi="icon-git contacts-social-item" text="Мои репозитории" />
                <SocialLi href="https://www.fl.ru/users/alexdf89/" imgSrc={logoFL} classLi="icon-fl contacts-social-item" text="Я на фрилансе" />
                <SocialLi href="https://vk.com/id12591211" imgSrc={logoVK} classLi="icon-vk contacts-social-item" text="Вконтакте" />
              </ul>
            </div>

            <div className="contacts-item">
              <FormContainer />
            </div>
          </div>
        </div>
        <div className="message">
          {props.form.mes 
            ? 
              <div className="message-text">{props.form.mes}</div>            
            : 
              ''
          }
        </div>
      </section>
    </main>
  );
}

Contacts.propTypes = {
  form: PropTypes.exact({
    mes: PropTypes.string,
    ok: PropTypes.bool
  })
};

export default Contacts;