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
                    <p>LinksPanel Component.</p>
                </div>
            </div>
        )
    }
}

export default LinksPanel;
