import React, { Component } from 'react';
import s from './ContactPanel.module.scss';
import PropTypes from 'prop-types';

class ContactPanel extends Component {
    constructor(props) {
        super(props); 
        
        this.state = {

        }
    }

    render() {
        return (
            <div className={s.contactPanelContainer}>
                <p>ContactPanel Component.</p>
            </div>
        )
    }
}

export default ContactPanel;
