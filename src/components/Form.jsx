import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';



function Form(props) {
  return (
    <form onSubmit={event => props.onSendForm(event)} className="contacts-form">
      <Textarea placeholder="Какой у вас вопрос?" />
      <Input placeholder="Введите email" type="email" />
      <Input placeholder="Введите номер телефона" type="tel" />
      <Button text="Отправить" />
    </form>
  );
}

Form.propTypes = {
  onSendForm: PropTypes.func
};

export default Form;