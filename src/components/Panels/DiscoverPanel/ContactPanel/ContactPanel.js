import React, { Component } from 'react';
import s from './ContactPanel.module.scss';

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
                        <ul className={s.flexOuter}>
                            <li>
                                <label>
                                    Name
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className={s.inputArea} 
                                        placeholder="Enter your name."
                                    />
                                </label>
                            </li>
                            <li>
                                <label>
                                    E-mail
                                    <input 
                                        type="email" 
                                        name="reply_to" 
                                        className={s.inputArea}
                                        placeholder="Enter your e-mail."
                                    />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Message
                                    <textarea 
                                        type="text" 
                                        name="message" 
                                        className={s.textArea} 
                                        placeholder="Send me a nice message."
                                    />
                                </label>
                            </li>
                            <li>
                                <button 
                                    type="submit" 
                                    value="Send" 
                                    className={s.sendBtn}
                                >
                                    Send
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactPanel;
