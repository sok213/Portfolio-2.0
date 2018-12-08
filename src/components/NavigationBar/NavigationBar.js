import React, { Component } from 'react';
import s from './NavigationBar.module.scss';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	static propTypes = {
		navigateTo: PropTypes.func
	}

	navigateTo = (page) => {
		this.props.navigateTo(page);
	}

	render() {
		return (
			<div className={s.navigationContainer}>
				<ul className={s.navItemsContainer}>
					<li onClick={this.navigateTo.bind(1)}>Welcome</li>
					<li onClick={this.navigateTo.bind(2)}>About</li>
					<li onClick={this.navigateTo.bind(3)}>Projects</li>
					<li onClick={this.navigateTo.bind(4)}>Discover</li>
				</ul>
			</div>
		);
	}
}

export default NavigationBar;
