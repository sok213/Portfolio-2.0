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
                <div className={s.contactPanel}>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Subject:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Message:
                            <textarea type="text" name="name" />
                        </label>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactPanel;
