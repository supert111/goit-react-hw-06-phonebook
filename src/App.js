import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import styles from "./App.module.css"
import shortid from 'shortid';

// import CounterView from './views/CounterView';

class App extends Component { 
    state = {
        // contacts: [
        //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        // ],
        // filter: '',
    };

    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);

    //     if (parsedContacts) {
    //         this.setState({ contacts: parsedContacts})
    //     }
    // }

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

    // deleteContact = (contactId) => {
    //     this.setState(({ contacts }) => ({
    //         contacts: contacts.filter(contact => contact.id !== contactId)
    //     }))
    // };
    
    handleFilter = (element) => {
        const { value } = element.target;
        this.setState ({ filter: value });  
    };

    // searchByFilter = () => {
    //     const { contacts, filter } = this.state;
    //     const caseInsensitive = filter.toLocaleLowerCase();
    //     return contacts.filter(contact => 
    //         contact.name.toLocaleLowerCase().includes(caseInsensitive)
    //     );
    // };

    render() {
        // const seachContact = this.searchByFilter();
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
                {/* <CounterView /> */}
            </div>
        )
    }
}
export default App;