import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cats from './cats.js';

import { connect } from 'react-redux'
import * as actions from './actions.js'

class App extends Component {

  render() {

    const props = this.props;

    console.log({props})

    return (
      <div className="App">
        <div className="App-header">
          <h2>All the cats</h2>
        </div>
        <Cats cats={ props.cats } getCat={ props.getCat }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats,
})

export default connect(mapStateToProps, actions)(App)
