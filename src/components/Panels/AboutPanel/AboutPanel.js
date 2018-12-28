import React, { Component } from 'react';
import s from './AboutPanel.module.scss';
import TextCard from './TextCard/TextCard';
import ImageCard from './ImageCard/ImageCard';

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
                <ImageCard />
            </div>
        )
    }
}

export default AboutPanel;
