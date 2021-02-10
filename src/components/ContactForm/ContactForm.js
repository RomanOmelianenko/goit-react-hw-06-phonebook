import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
        onAddContact: PropTypes.func.isRequired
    };
    
    state = {
        name: "",
        number: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    // sameNameContact = () => {
    //     const { name } = this.state;
    //     return this.props.contactsItems.find(sameContact =>
    //         sameContact.text.name.toLowerCase() === name.toLowerCase());
    // };

    handleSubmit = e => {
        e.preventDefault();

        // const sameNameContact = this.props.contactsItems.find(sameContact =>
        //     sameContact.text.name.toLowerCase() === this.state.name.toLowerCase());
        
        const { name, number } = this.state;

        const sameNameContact = this.props.contactsItems
            .map(contact => contact.text.name)
            .includes(name);
        
        const inputNumber = Number(number)

        if (sameNameContact) {
            this.props.onSameNameContact();
            setTimeout(() => {
                this.props.onSameNameContact();
            }, 1500);
        } else if (name.length === 0) {
            alert("Field 'Name' must be filled!");
        } else if (number.length === 0) {
            alert("Field 'Number' must be filled!")
        } else if (!inputNumber) {
            alert("Insert the number")
        } else {
            this.props.onAddContact({ ...this.state });
        }

        this.setState({ name: "", number: "" });
    };
  
    render() {
        return (
            <form
                className={styles.TaskEditor}
                onSubmit={this.handleSubmit}>
                <label
                    className={styles.TaskEditor_label}>
                    Name
                        <input
                            className={styles.TaskEditor_input}
                            type="text"
                            name="name"
                            placeholder="Your name"
                            autoComplete="off"
                            autoFocus="on"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                </label>

                <label
                    className={styles.TaskEditor_label}>
                    Number
                    <input
                        className={styles.TaskEditor_input}
                        type="text"
                        name="number"
                        placeholder="Your number"
                        autoComplete="off"
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>

                <button
                    className={styles.TaskEditor_button}
                    type="submit">
                    Add contact
                </button>
            </form>
        );
    };
};

const mapStateToProps = state => {
  return {
      contactsItems: state.contacts.contactsItems,
    //   modalWarning: !state.contacts.modalWarning
  }
};

const mapDispatchToProps = {
    onAddContact: contactsActions.addContact,
    onSameNameContact: contactsActions.showModalWarning
};
// или так mapDispatchToProps
// const mapDispatchToProps = dispatch => {
//     return {
//         onAddContact: text => dispatch(contactsActions.addContact(text))
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
