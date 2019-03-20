import React from 'react';

import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';



function Form(props) {
  return (
    <form action="" className="contacts-form">
      <Textarea placeholder="Какой у вас вопрос?" />
      <Input placeholder="Введите email" />
      <Input placeholder="Введите номер телефона" />
      <Button text="Отправить" />
    </form>
  );
}

export default Form;