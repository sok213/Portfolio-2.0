import React, { Component } from 'react';
import s from './NavigationBar.module.scss';

class NavigationBar extends Component {
	render() {
		return (
			<div className={s.navigationContainer}>
				<p>This is where the dots will go.</p>
			</div>
		);
	}
}

export default NavigationBar;
