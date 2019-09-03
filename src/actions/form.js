import axios from 'axios';

export const SEND_FORM = 'SEND_FORM';

export function sendForm(event) {
  event.preventDefault();
  event.persist();

  const message = {
    mes: event.target[0].value,
    email: event.target[1].value,
    tel: event.target[2].value,
  };

  if (!message.email && !message.tel) {
    return dispatch => {

      dispatch({
        type: SEND_FORM,
        form: { mes: 'Нужно заполнить поле Email или Телефон!' }
      });
  
      const timeout = setTimeout(function() {
        dispatch({ type: SEND_FORM, form: { mes: ''} });
        clearTimeout(timeout);
      }, 4000);
    }
  } else {
    return dispatch => {
      return axios.post('api/sendForm', message)
        .then(response => response.data)
        .then(form => {
          dispatch({
            type: SEND_FORM,
            form: { mes: 'Сообщение отправлено!' }
          })

          const timeout = setTimeout(function() {
            dispatch({ type: SEND_FORM, form: { mes: ''} });
            clearTimeout(timeout);
          }, 4000);
        })
        .catch(err => console.error(err));
    }
  }
}