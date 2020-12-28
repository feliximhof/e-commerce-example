import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

import { Route, Switch } from "react-router-dom";

function Hats() {
	return (
		<div>
			<h1>lksjadflkjasf</h1>
		</div>
	);
}

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/hats" component={Hats} />
			</Switch>
		</div>
	);
}

export default App;
