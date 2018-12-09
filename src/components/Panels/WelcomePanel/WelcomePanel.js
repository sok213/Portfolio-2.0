import React, { Component } from 'react';
import s from './WelcomePanel.module.scss';
import PropTypes from 'prop-types';

class WelcomePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.panelContainer}>
                <div className={s.overlay}>
                    <div className={s.header}>  
                        <h2>Sophanarith Sok</h2>
                        <div className={s.underline}></div>
                        <p>Just call me / sōk /</p>
                    </div>

                    <div className={s.introduction}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomePanel;
