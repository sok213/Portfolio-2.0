import React, { Component } from 'react';
import logo from './logo.svg';
import s from './App.module.scss';
import Panels from './components/Panels/Panels';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
	render() {
		return (
			<div className={s.App}>
				<div className={s.siteContent}>
					<Panels />
				</div>
				<NavigationBar />
			</div>
		);
	}
}

export default App;
