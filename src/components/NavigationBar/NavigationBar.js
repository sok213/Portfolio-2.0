import React, { Component } from 'react';
import s from './NavigationBar.module.scss';
import PropTypes from 'prop-types';

class NavigationBar extends Component {

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
					<li onClick={this.navigateTo.bind(this, 1)}>
						<span>Hi</span>
					</li>
					<li onClick={this.navigateTo.bind(this, 2)}>
						<span>Bio</span>
					</li>
					<li onClick={this.navigateTo.bind(this, 3)}>
						<span>Dev</span>
					</li>
					<li onClick={this.navigateTo.bind(this, 4)}>
						<span>Discover</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavigationBar;
