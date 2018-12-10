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
                    <form 
                        action="https://formspree.io/sokcodes@gmail.com" 
                        method="POST"
                    >
                        <ul className='flex-outer'>
                            <li>
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Email:
                                    <input type="email" name="reply_to" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Message:
                                    <textarea type="text" name="message" />
                                </label>
                            </li>
                            <li>
                                <input type="submit" value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactPanel;
