import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import App from './App';
// react router dom
import { BrowserRouter } from "react-router-dom";

// redux
import { createStore } from "redux"
import rootReducer from "./redux/reducers/"
import { Provider } from "react-redux"
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
