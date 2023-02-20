import { useSelector } from 'react-redux';
import { selectContacts } from '../Contacts/contactsSlice';
import { selectFilter } from 'features/Filter/filterSlice';

import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);
  const filterStatus = filter.status;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
