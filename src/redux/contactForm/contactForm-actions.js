import types from './contactForm-types';
import shortid from 'shortid';

const addContact = ( name, number ) => ({
    type: types.ADD,
    payload: {
        name,
        number, 
        id: shortid.generate(),
    }
});

export default { addContact };

// const deleteContact = (contactId) => {

// }