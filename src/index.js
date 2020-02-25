import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
serviceWorker.unregister();
