import { connect } from 'react-redux';

import Contacts from '../components/Contacts';

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

const ContactsContainer = connect(mapStateToProps)(Contacts);

export default ContactsContainer;