import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import index from './store/reducers/index';

import { createStore, compose } from 'redux';

export default function configureStore() {
    const composeEnhancers = 
    (
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
    const enhancer = composeEnhancers();
    const store = createStore(index, enhancer);

    return store;
}

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
