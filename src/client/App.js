import React, { Component } from 'react';
import Header from './components/Header';

import './sass/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">{/* <p>Grommerce Store</p> */}</div>
      </div>
    );
  }
}

export default App;
