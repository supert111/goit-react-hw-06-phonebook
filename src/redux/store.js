import { 
  persistStore, 
  persistReducer, 
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER, 
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contactForm/contactForm-reduser';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}
const middleware = [...getDefaultMiddleware({
  // serializableCheck: {
  //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  // }, 
}), logger]

const store = configureStore({
  reducer: { state: persistReducer(persistContactsConfig, contactReducer) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

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