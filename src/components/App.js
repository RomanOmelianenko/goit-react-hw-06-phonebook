import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Header from './Header/Header';
import Logo from './Logo/Logo';
import ShowModalWarning from './ShowModal/ShowModalWarning';
import './App.css';

function App({ modalWarning, contactsItems }) {

    return (
        <div className="Wrapper">

            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="HeaderAppear"
                unmountOnExit
            >
            {stage => {
                // console.log(stage);
                return (
                    <div className="Header">
                        <Header />
                        <CSSTransition
                            in={stage === 'entered'}
                            timeout={500}
                            classNames="LogoAppear"
                            unmountOnExit
                        >
                            <Logo />
                        </CSSTransition>
                    </div>
                )
            }}
            </CSSTransition>
                <ContactForm
            />

            <CSSTransition
                in={contactsItems.length > 1}
                timeout={250}
                classNames="FilterAppear"
                unmountOnExit
            >
                    <Filter/>
            </CSSTransition>
                
            <CSSTransition
                in={contactsItems.length > 0}
                timeout={250}
                classNames="ContactsAppear"
                unmountOnExit
            >
                <h2 className="ContactsName">
                    Contacts
                </h2>
            </CSSTransition>
                
            <CSSTransition
                in={contactsItems.length > 0}
                timeout={250}
                classNames="ContactListApp"
                unmountOnExit
            >
                <ContactList/>
            </CSSTransition>

            <CSSTransition
                in={modalWarning}
                timeout={250}
                classNames="ShowModalAppear"
                unmountOnExit
            >

             <ShowModalWarning />

            </CSSTransition>
               
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        modalWarning: state.contacts.modalWarning,
        contactsItems: state.contacts.contactsItems,
        // filterShow: state.contacts.contactsItems
    };
};

App.propTypes = {
    modalWarning: PropTypes.bool.isRequired,
    contactsItems: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);