// import { enableES5 } from 'immer';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contactForm/contactForm-reduser';
// enableES5();

const rootReducer = combineReducers({
    state: contactReducer,
})
const store = configureStore({
  reducer: rootReducer,
});


//import { createStore, combineReducers } from 'redux';
// const persistedState = localStorage.getItem('contacts') 
//                      ? JSON.parse(localStorage.getItem('contacts'))
//                      : {};

// const store = createStore(rootReducer, persistedState, composeWithDevTools(),);

// store.subscribe(()=>{
//   localStorage.setItem('contacts', JSON.stringify(store.getState()))
// })
                     
export default store;