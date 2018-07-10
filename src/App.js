import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
