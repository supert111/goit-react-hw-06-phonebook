import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contactForm/contactForm-reduser';

const rootReducer = combineReducers({
    state: contactReducer,
})

// const inicialState = {
//     counter: { 
//         value: 0, 
//         step: 5,
//     }
// }

// const reducer = (state = inicialState, {payload, type}) => {
//     switch (type) {
//         case 'counter/increment':
//             return {
//                 ...state,
//                counter: {
//                    ... state.counter,
//                    value: state.counter.value + payload,
//                }
//             }
        
//         case 'counter/decrement':
//             return {
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     value: state.counter.value - payload,
//                 }
//             };

//         default:
//             return state;
//     }
// }

const store = createStore(rootReducer, composeWithDevTools(), persistedState);

store.subscribe(()=>{
    localStorage.setItem('contacts', JSON.stringify(store.getState()))
  })

const persistedState = localStorage.getItem('contacts') 
                     ? JSON.parse(localStorage.getItem('contacts'))
                     : {}
                     
export default store;