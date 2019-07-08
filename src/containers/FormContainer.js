import { connect } from 'react-redux';

import { sendForm } from '../actions';
import Form from '../components/Form';

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSendForm: event => dispatch(sendForm(event))
  };
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;