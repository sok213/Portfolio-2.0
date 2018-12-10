import React, { Component } from 'react';
import s from './DiscoverPanel.module.scss';
import PropTypes from 'prop-types';

class DiscoverPanel extends Component {
    constructor(props) {
        super(props); 
        
        this.state = {

        }
    }

    render() {
        return (
            <div className={s.discoverPanelCompoonent}>
                <p>DiscoverPanel Component.</p>
            </div>
        )
    }
}

export default DiscoverPanel;
