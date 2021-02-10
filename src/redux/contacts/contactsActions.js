import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const addContact = createAction('contacts/add', text => ({
    payload: {
        contacts: {
            text,
            id: uuidv4()
        },
    },
}));


const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

const showModalWarning = createAction('contacts/modalWarning');

const actions = {
    addContact,
    removeContact,
    changeFilter,
    showModalWarning
};

export default actions;