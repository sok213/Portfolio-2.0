import React, { Component } from 'react';
import s from './AboutPanel.module.scss';
import PropTypes from 'prop-types';
import TextCard from './TextCard/TextCard';

class AboutPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.aboutPanelContainer}>
                <TextCard />
            </div>
        )
    }
}

export default AboutPanel;
