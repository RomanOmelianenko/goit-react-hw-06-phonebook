import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const onAddContact = (state, actions) => {
    return [...state, actions.payload.contact]
};
const onRemoveContact = (state, actions) => {
    return state.filter(contact => contact.id !== actions.payload)
};
const onAddFilter = (state, actions) => actions.payload;

const contactsItems = createReducer([], {
    [contactsActions.addContact]: onAddContact,
    [contactsActions.removeContact]: onRemoveContact
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: onAddFilter
});

export default combineReducers({
    contactsItems,
    filter
});