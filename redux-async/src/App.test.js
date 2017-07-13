import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* components */
import { CatTile, Cats, } from './cats.js'

/* redux stuff */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ createStore(reducer) }>
      <App />
    </Provider>,
    div
  );
});

it('cats renders without crashing', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <Cats cats={ [] }/>,
    container
  )
})

it('tile renders without crashing', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <CatTile cat={{ img: '', }} />, container
  )
})
