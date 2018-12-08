import React, { Component } from 'react';
import s from './App.module.scss';
import Panels from './components/Panels/Panels';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activePanel: 1
		}
	}

	navigateTo = (page) => {
		this.setState({ activePanel: page });
	}

	nextSlide = () => {
		if(this.state.activePanel !== 4) {
			this.setState({
				activePanel: this.state.activePanel + 1 
			});
		}
	}

	prevSlide = () => {
		if(this.state.activePanel !== 1) {
			this.setState({
				activePanel: this.state.activePanel - 1 
			});
		}
	}

	render() {
		return (
			<div className={s.App}>
				<div className={s.siteContent}>
					<Panels 
						activePanel={this.state.activePanel}
						nextSlide={this.nextSlide}
						prevSlide={this.prevSlide}
					/>
				</div>
				<NavigationBar 
					navigateTo={this.navigateTo}
				/>
			</div>
		);
	}
}

export default App;
