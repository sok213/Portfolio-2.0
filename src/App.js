import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Panels from './components/Panels/Panels';
import NavigationDots from './components/NavigationDots/NavigationDots';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Panels />
				<NavigationDots />
			</div>
		);
	}
}

export default App;
