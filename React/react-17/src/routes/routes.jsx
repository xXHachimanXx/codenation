import React from 'react';
import { Route, Switch } from "react-router-dom";

const Routes = () => {

	return (
		<Switch>
			<Route exact path="/" component={LoginRoute} />

			<Route exact path="/authorize" component={AuthorizeRoute} />

			<PrivateRoute path="/dashboard" component={DashboardRoute} />
		</Switch>
	);
};


export default Routes;