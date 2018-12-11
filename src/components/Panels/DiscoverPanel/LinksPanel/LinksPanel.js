import React, { Component } from 'react';
import s from './LinksPanel.module.scss';
import PropTypes from 'prop-types';

class LinksPanel extends Component {
    constructor(props) {
        super(props); 
        
        this.state = {

        }
    }

    render() {
        return (
            <div className={s.linksPanelContainer}>
                <div className={s.linksPanel}>
                    <h4>Social Media</h4>
                    <div className={s.underline}></div>
                    <ul className={s.socialMediaLinks}>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Medium</a></li>
                        <li><a href="#">CodePen</a></li>
                        <li><a href="#">FreeCodeCamp</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LinksPanel;
