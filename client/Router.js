import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import FrontPage from "./components/Frontpage"

const Router = (props) => {
	return (
		<Router>
			<Switch>
				<Route path="/FrontPage">
					<FrontPage />
				</Route>
				<Route path="/">
					<FrontPage />
				</Route>
			</Switch>
		</Router>
	)
}

export default Router
