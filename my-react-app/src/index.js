import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentThree from './components/ComponentThree';
import LoginStatus from './components/LoginStatus';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Display from './components/Display';
import Form from './components/Form';
import Component5 from './components/Component5';
import ClassForm from './components/ClassForm';
import ComponentSix from './components/ComponentSix';
import UseRefComponent from './components/UseRefComponent';
import UseRefExample from './components/UseRefExample';
import UseRefLikeButton from './components/UseRefLikeButton';
import UseEffectCleanUp from './components/UseEffectCleanUp';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
