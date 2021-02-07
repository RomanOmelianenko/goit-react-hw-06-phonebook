import React  from "react";
import { CSSTransition } from 'react-transition-group';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Header from './Header/Header';
import Logo from './Logo/Logo';
// import ShowModalWarning from './ShowModal/ShowModalWarning';
import './App.css';

function App() {

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

            {/* <CSSTransition
                in={contacts.length > 1}
                timeout={250}
                classNames="FilterAppear"
                unmountOnExit
            > */}
                    <Filter/>
            {/* </CSSTransition> */}
                
            {/* <CSSTransition
                in={contacts.length > 0}
                timeout={250}
                classNames="ContactsAppear"
                unmountOnExit
            > */}
                <h2 className="ContactsName">
                    Contacts
                </h2>
            {/* </CSSTransition> */}
                
            {/* <CSSTransition
                in={visibleContacts.length > 0}
                timeout={250}
                classNames="ContactListApp"
                // unmountOnExit
            > */}
                <ContactList/>
            {/* </CSSTransition> */}

            {/* <CSSTransition
                in={modalWarning}
                timeout={250}
                classNames="ShowModalAppear"
                unmountOnExit
            >
                <ShowModalWarning />
            </CSSTransition> */}
               
        </div>
    );
};

export default App;