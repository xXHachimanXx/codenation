import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Showcase from '../containers/Showcase/Showcase.jsx';
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Showcase} />
  </Switch>
);

export default Routes;