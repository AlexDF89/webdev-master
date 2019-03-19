import React from 'react';

import SocialLi from '../SocialLi';
import logoGit from '../../images/github_icon.svg';
import logoFL from '../../images/fl_icon.png';
import logoVK from '../../images/vk_icon.svg';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';



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
                <SocialLi href="mailto:alexdf89@yandex.ru" imgSrc={logoGit} classLi="icon-git contacts-social-item" text="AlexDF89@yandex.ru" />
                <SocialLi href="https://github.com/AlexDF89" imgSrc={logoGit} classLi="icon-git contacts-social-item" text="Мои репозитории" />
                <SocialLi href="https://www.fl.ru/users/alexdf89/" imgSrc={logoFL} classLi="icon-fl contacts-social-item" text="Я на фрилансе" />
                <SocialLi href="https://vk.com/id12591211" imgSrc={logoVK} classLi="icon-vk contacts-social-item" text="Вконтакте" />
              </ul>
            </div>

            <div className="contacts-item">
              <form action="" className="contacts-form">
                <Textarea placeholder="Какой у вас вопрос?" />
                <Input placeholder="Введите свой email" />
                <Input placeholder="Введите свой номер телефона" />
                <Button text="Отправить" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacts;