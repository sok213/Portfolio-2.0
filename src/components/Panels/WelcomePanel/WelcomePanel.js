import React, { Component } from 'react';
import s from './WelcomePanel.module.scss';

// TODO: 
// - Replace background image to something more personal.
// Replace favicon.ico image.

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
                        <p>"If you spend too much time thinking about a thing, you'll never get it done."</p>
                        <p className={s.bruceLee}>- Bruce Lee</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomePanel;
