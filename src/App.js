import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import styles from "./App.module.css"


class App extends Component { 
    state = {
    };

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
                    <ContactList />
                </div>
            </div>
        )
    }
}
export default App;