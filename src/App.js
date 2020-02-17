import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
	return (
		<div>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
		</div>
	);
}

export default App;
