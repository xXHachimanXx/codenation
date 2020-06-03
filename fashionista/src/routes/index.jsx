import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Showcase from '../pages/Showcase/Showcase';
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Showcase} />
  </Switch>
);

export default Routes;