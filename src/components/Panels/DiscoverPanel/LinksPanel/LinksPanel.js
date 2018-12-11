import React, { Component } from 'react';
import s from './LinksPanel.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFreeCodeCamp, faCodepen, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

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
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faMedium} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faCodepen} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faFreeCodeCamp} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LinksPanel;
