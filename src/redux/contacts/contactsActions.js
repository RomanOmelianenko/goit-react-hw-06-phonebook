import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const addContact = createAction('contact/add', text => ({
    payload: {
        contact: {
            text,
            id: uuidv4()
        },
    },
}));

// const removeContact = createAction('contact/remove', contactId => ({
//     payload: {
//         contactId
//     },
// }));

//   или

const removeContact = createAction('contact/remove');

const changeFilter = createAction('contact/changeFilter');

const actions = {
    addContact,
    removeContact,
    changeFilter
};

export default actions;