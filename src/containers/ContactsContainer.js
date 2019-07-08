import { connect } from 'react-redux';

import Contacts from '../components/pages/Contacts';

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

const ContactsContainer = connect(mapStateToProps, null)(Contacts);

export default ContactsContainer;