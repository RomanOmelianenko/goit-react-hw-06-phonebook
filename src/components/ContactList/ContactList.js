import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ContactList.css';
import contactsActions from '../../redux/contacts/contactsActions'

// function ContactList({ contacts, onRemoveContact }) {
const ContactList = ({ contacts, onRemoveContact }) => (
    <TransitionGroup
        component="ul"
        className="TaskList">
            
        {contacts.map(({id, text}) => (
            <CSSTransition
                key={id}
                timeout={250}
                classNames="ContactListAppear"
                // unmountOnExit
            >
                <li
                    className="TaskList_item"
                    /*key={contact.id}*/>
                    {text.name}: {text.number}
                    {
                        <button
                            className="TaskList_button"
                            type="button"
                            name="delete"
                            onClick={() => onRemoveContact(id)}
                        >
                            x
                        </button>
                    }
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
);
    

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })),
};

const mapStateToProps = state => {
    const { contactsItems, filter } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contactsItems.filter(item =>
        item.text.name.toLowerCase().includes(normalizedFilter))
    
    return {
        contacts: visibleContacts
    };
};

const mapDispatchToProps = {
    onRemoveContact: contactsActions.removeContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);