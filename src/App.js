import React, { Component } from 'react';
import s from './App.module.scss';
import Panels from './components/Panels/Panels';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activePanel: 1,
			rendering: false,
            buttonActive: false,
		}
	}

	navigateTo = (page) => {
		this.setState({ 
			activePanel: page,
			rendering: true
		});

		this.delayStateChange(200, 'rendering', false);
		this.delayStateChange(1000, 'buttonActive', false);
	}

	delayStateChange(
		ms,
		key,
		value
	) {
		setTimeout(() => {
			this.setState({ [key]: value });
		}, ms);
	}

	// nextSlide = () => {
	// 	if(this.state.activePanel !== 4) {
	// 		this.setState({
	// 			activePanel: this.state.activePanel + 1,
	// 			rendering: true
	// 		});
	// 	}

	// 	this.delayStateChange(200, 'rendering', false);
    //     this.delayStateChange(1000, 'buttonActive', false);
	// }

	// prevSlide = () => {
	// 	if(this.state.activePanel !== 1) {
	// 		this.setState({
	// 			activePanel: this.state.activePanel - 1,
	// 			rendering: true 
	// 		});
	// 	}

	// 	this.delayStateChange(200, 'rendering', false);
    //     this.delayStateChange(1000, 'buttonActive', false);
	// }

	render() {
		return (
			<div className={s.App}>
				<div className={s.panelContainer}>
					<Panels
						rendering={this.state.rendering} 
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
