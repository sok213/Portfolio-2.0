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
                        <p>"I fear not the man who has practiced 10,000 programming languages once, but I fear the man who has practiced JavaScript 10,000 times."</p>
                        <p className={s.bruceLee}>- Bruce Lee</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomePanel;
