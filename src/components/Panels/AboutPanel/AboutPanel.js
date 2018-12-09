import React, { Component } from 'react';
import s from './AboutPanel.module.scss';
import PropTypes from 'prop-types';

class AboutPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>About Me.</p>
            </div>
        )
    }
}

export default AboutPanel;
