import { useDispatch } from 'react-redux';
import { removeContact } from '../Contacts/contactsSlice';

import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <li className={css.contact}>
      {contact.name}: {contact.phone}
      <button
        className={css.button}
        type="button"
        id={contact.id}
        onClick={() => handleRemoveContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default Contact;
