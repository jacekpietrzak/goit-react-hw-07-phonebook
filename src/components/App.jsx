import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contactsSlice';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.App}>
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {contacts.length === 0 && !isLoading && <div>No contacts to show</div>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
