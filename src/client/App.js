import React, { Component } from 'react';
import Header from './components/Header';

import './sass/app.scss';

import Index from './pages/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Index />
        </div>
      </div>
    );
  }
}

export default App;
