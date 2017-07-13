import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* redux stuff */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ createStore(reducer) }>
      <App />
    </Provider>, div
  );
});
