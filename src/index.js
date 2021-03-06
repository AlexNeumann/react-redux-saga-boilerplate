import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Routing
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './containers/Placeholder';

import { store } from './configureStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" exact component={App} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
