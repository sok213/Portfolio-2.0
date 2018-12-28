import React, { Component } from 'react';
import s from './NavigationBar.module.scss';
import PropTypes from 'prop-types';

class NavigationBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'hi'
		}
	}

	static propTypes = {
		navigateTo: PropTypes.func
	}

	navigateTo = (page, tabClicked) => {
		this.props.navigateTo(page);
		this.setState({ activePanel: tabClicked });
	}

	render() {
		return (
			<div className={s.navigationContainer}>
				<ul className={s.navItemsContainer}>
					<li 
						onClick={this.navigateTo.bind(this, 1, 'hi')}
						className={this.state.activePanel === 'hi' ? s.active : null}
					>
						<span>Hi</span>
					</li>
					<li 
						onClick={this.navigateTo.bind(this, 2, 'bio')}
						className={this.state.activePanel === 'bio' ? s.active : null}	
					>
						<span>Bio</span>
					</li>
					<li 
						onClick={this.navigateTo.bind(this, 3, 'dev')}
						className={this.state.activePanel === 'dev' ? s.active : null}	
					>
						<span>Dev</span>
					</li>
					<li 
						onClick={this.navigateTo.bind(this, 4, 'discover')}
						className={this.state.activePanel === 'discover' ? s.active : null}	
					>
						<span>Discover</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavigationBar;
