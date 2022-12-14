import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import  Home  from "./views/home.jsx";
import  Locations  from "./views/locations.jsx";
import Characters from "./views/characters.jsx";
import Notfound from "./views/notfound.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/locations/:id">
							<Locations />
						</Route>
						<Route  path="/characters/:id">
							<Characters />
						</Route>
						<Route>
						<Notfound />
						</Route>
					</Switch>
					<Footer/>
					
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
