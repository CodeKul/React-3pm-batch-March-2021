import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./reducers"
import {Provider} from "react-redux"
import {
  createStore, 
  applyMiddleware,
} from "redux"

import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"
import { render } from '@testing-library/react';

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)))

  render(
    <Provider store={store}>
      <App/>
    </Provider>,
     document.getElementById('root')
  )

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
