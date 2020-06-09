import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Showcase from '../pages/Showcase/Showcase';
import ProductDetails from '../pages/ProductDetails/ProductDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Showcase} />
    <Route exact path="/produto/:code_color" component={ProductDetails} />
  </Switch>
);

export default Routes;