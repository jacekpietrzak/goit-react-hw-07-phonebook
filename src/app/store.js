import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import contactsReducer from 'features/Contacts/contactsSlice';
import filterReducer from 'features/Filter/filterSlice';

axios.defaults.baseURL = 'https://63f3729cfe3b595e2ee2000f.mockapi.io/api/v1';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
