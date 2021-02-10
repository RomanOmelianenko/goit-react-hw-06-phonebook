import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const onAddContact = (state, actions) => {
    return [...state, actions.payload.contacts]
};
const onRemoveContact = (state, actions) => {
    return state.filter(contact => contact.id !== actions.payload)
};
const onAddFilter = (state, actions) => actions.payload;

const onShowModal = (state, action) => {
    return !state
};


const contactsItems = createReducer([], {
    [contactsActions.addContact]: onAddContact,
    [contactsActions.removeContact]: onRemoveContact
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: onAddFilter
});

const modalWarning = createReducer(false, {
    [contactsActions.showModalWarning]: onShowModal
});

// const modalWarning = (state = false, {type}) => {
    
//     switch (type) {
//         case contactsActions.showModalWarning:
//             return !state;
        
//         default:
//             return state;
//     };
// };


export default combineReducers({
    contactsItems,
    filter,
    modalWarning
});