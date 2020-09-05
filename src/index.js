import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store  from './js/Store'
import { Provider } from 'react-redux'
import {loadProducts}  from './js/ActionCreator'

import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

store.dispatch(loadProducts())

ReactDOM.render(
	<BrowserRouter>
		
		<Provider store={store}>
	  		<App />
		</Provider>
	</BrowserRouter>,
  document.getElementById('root')
);
