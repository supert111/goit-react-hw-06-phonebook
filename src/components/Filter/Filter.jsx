import React from "react";
import styles from "./Filter.module.css"
import { connect } from 'react-redux';
import actions from '../../redux/contactForm/contactForm-actions';

const Filter = ({value, onChange}) => {
    return (
        <label>Find contacts by name
            <input className={styles.input_display}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                // value={value}
                onChange={onChange}
            />
        </label>
    )
}
const searchByFilter = (allContacts, filter) => {
        const caseInsensitive = filter.toLocaleLowerCase();
        return allContacts.filter(contact => 
            contact.name.toLocaleLowerCase().includes(caseInsensitive)
        );
    };

const mapStateToProps = ({state: {contacts, filter}}) => ({
        value: searchByFilter(contacts, filter),
    })
   

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(actions.searchByFilter(e.target.value)),
})



export default connect(mapStateToProps, mapDispatchToProps)(Filter);