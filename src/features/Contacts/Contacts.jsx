import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  selectContacts,
  selectIsLoading,
  selectError,
} from '../Contacts/contactsSlice';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './Contacts.module.css';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {contacts.length === 0 && !isLoading && <div>No contacts to show</div>}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
