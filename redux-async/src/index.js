import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* redux stuff */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
