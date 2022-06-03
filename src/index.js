import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from '@redux-saga/core';

// // const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);


