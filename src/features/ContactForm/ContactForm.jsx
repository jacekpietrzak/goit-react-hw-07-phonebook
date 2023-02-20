import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../Contacts/contactsSlice';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const inputNameRef = useRef(null);
  const inputNumberRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact();
  };

  const handleAddContact = () => {
    const contactName = inputNameRef.current.value;
    const contactNumber = inputNumberRef.current.value;

    const newContact = {
      name: contactName,
      number: contactNumber,
    };

    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkName !== undefined) {
      return alert(`${checkName.name} is already in contacts.`);
    }

    dispatch(addContact(newContact));
    inputNameRef.current.value = '';
    inputNumberRef.current.value = '';
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <section className={css.section}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          ref={inputNameRef}
        />
      </section>
      <section className={css.section}>
        <label className={css.label} htmlFor="tel">
          Number
        </label>
        <input
          className={css.input}
          id="tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          ref={inputNumberRef}
        />
      </section>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
