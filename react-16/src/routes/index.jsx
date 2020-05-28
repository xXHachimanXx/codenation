import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FeedRoute from './FeedRoute';
import UsersRoute from './UsersRoute';
import ProfileRoute from './ProfileRoute';
import NewUserRoute from './NewUserRoute';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <FeedRoute />
      </Route>

      <Route exact path="/users">
        <UsersRoute />
      </Route>

      <Route path="/users/:username">
        <ProfileRoute />
      </Route>

      <Route exact path="/newuser">
        <NewUserRoute />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
