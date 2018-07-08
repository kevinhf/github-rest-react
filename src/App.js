import React, { Component } from 'react';
import axios from 'axios';

import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
      <div className="App">
      Testing Axios
      <GitHub/>
      </div>
    );
  }
}

export default App;
