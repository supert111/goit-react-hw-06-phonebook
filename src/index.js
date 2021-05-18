import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

import { Provider } from 'react-redux';
import store from './redux/store';
// import { myAction } from './redux/actions';
// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(myAction(3)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);