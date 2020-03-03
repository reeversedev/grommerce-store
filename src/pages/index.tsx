import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import AllProducts from './AllProducts';
import { Header } from '../components/Header';
import { routes } from '../routes';

const Index = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path={routes.bestSellingItems} component={AllProducts} />
        </Switch>
      </div>
    </Router>
  );
};

export default Index;
