import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contactForm/contactForm-reduser';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer: {
    state: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;

////////////////////////////////////////////////////////////////////////
//redux

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactReducer from './contactForm/contactForm-reduser';

// const rootReducer = combineReducers({
//   state: contactReducer,
// })

// const persistedState = localStorage.getItem('contacts') 
//                      ? JSON.parse(localStorage.getItem('contacts'))
//                      : {};

// const store = createStore(rootReducer, persistedState, composeWithDevTools(),);

// store.subscribe(()=>{
//   localStorage.setItem('contacts', JSON.stringify(store.getState()))
// })
                     
// export default store;