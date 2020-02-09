import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import AllProducts from './AllProducts';

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={AllProducts} />
      </Switch>
    </Router>
  );
};

export default Index;
