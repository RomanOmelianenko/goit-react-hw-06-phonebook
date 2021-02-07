import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contactsReducer';

const store = configureStore({
    reducer: {
        contact: contactReducer
    },
});

export default store;