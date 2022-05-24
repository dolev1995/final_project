import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
//import {Router , Route} from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import Reducers from './reducers/';
import { createHashHistory  } from 'history';
//import logger from 'redux-logger'
const prod = process.env.NODE_ENV === 'production',
	middlewares = [thunk, promise, ...(prod ? [] : [createLogger()])],
	store = createStore(Reducers, applyMiddleware(...middlewares))
	const history = createHashHistory();

ReactDOM.render(
 <React.StrictMode>
      <Provider store={store}>
    

   <App />
   </Provider>,
  </React.StrictMode>,
//   <Provider store={store}>
//   <Routes history={history}>
//     <Route path="/" element={<App/>} />
//   </Routes>
// </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
