import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import styles from "./App.module.css"


class App extends Component { 
    state = {
    };

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            this.setState({ contacts: parsedContacts})
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const nextContacts = this.state.contacts;
    //      const prevContacts = prevState.contacts;
    //     if (nextContacts !== prevContacts) {
    //         localStorage.setItem('contacts', JSON.stringify(nextContacts));
    //     }
    // }

    // addContact = ({ name, number }) => {
    //     const contactName = { name, number, id: shortid.generate()};
    //     const { contacts } = this.state;
    //     const duplicateName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    //     if(duplicateName) {
    //         alert(`${name} is already in contacts.`);
    //         return;
    //     }
    //     if(name === "") {
    //         alert(`Please fill out the form it is empty.`);
    //     }
    //     else {
    //         this.setState((prevState) => ({
    //             contacts: [...prevState.contacts, contactName,]
    //         }));
    //     }         
    // };

    
    handleFilter = (element) => {
        const { value } = element.target;
        this.setState ({ filter: value });  
    };



    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1>Phonebook</h1>
                    <ContactForm /> 
                    <h2>Contacts</h2>
                    <Filter />
                    {/* {this.state.contacts.length !== 0 &&  */}
                    
                    <ContactList />
                    {/* }   */}
                </div>
            </div>
        )
    }
}
export default App;