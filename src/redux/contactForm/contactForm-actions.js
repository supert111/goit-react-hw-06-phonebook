import { createAction } from '@reduxjs/toolkit';
import types from './contactForm-types';
import shortid from 'shortid';

const addContact = createAction(types.ADD, ({name, number}) => {
    return {
        payload: {
            name,
            number, 
            id: shortid.generate(),
        }
    }
});
const deleteContact = createAction(types.DELETE);
const searchByFilter = createAction(types.SEARCH_BY_FILTER);

export default { addContact, deleteContact, searchByFilter };

///////////////////////////////////////////////////////////
//redux

// import types from './contactForm-types';
// import shortid from 'shortid';

// const addContact = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//         name,
//         number, 
//         id: shortid.generate(),
//     }
// });

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// })

// const searchByFilter = (value) => ({
//     type: types.SEARCH_BY_FILTER,
//     payload: value,
// })

// export default { addContact, deleteContact, searchByFilter };
