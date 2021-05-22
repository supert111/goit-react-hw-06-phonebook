import { combineReducers } from "redux";
import types from './contactForm-types';

const contacts = (state = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
], {type, payload}) => {
    switch(type) {
        case types.ADD:
            const duplicateName = state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase());
            if(duplicateName) {
                alert(`${payload.name} is already in contacts.`);
                return state;
            }

            if(payload.name === "") {
                alert(`Please fill out the form it is empty.`);
            }

            return [payload, ...state,];


        case types.DELETE:
            return state.filter(({id}) => id !== payload)

        default:
            return state; 
    }
};

const filter = (state = '', {type, payload}) => {
    switch(type) {
        case types.SEARCH_BY_FILTER:
            return payload;
        default:
            return state; 
    } 
};

export default combineReducers({
    contacts,
    filter,
})