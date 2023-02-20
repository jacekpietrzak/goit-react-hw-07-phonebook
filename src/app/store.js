import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from 'features/Contacts/contactsSlice';
import filterReducer from 'features/Filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
