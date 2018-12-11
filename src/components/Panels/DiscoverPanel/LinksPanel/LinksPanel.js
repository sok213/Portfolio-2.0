import React, { Component } from 'react';
import s from './LinksPanel.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { 
    faYoutube, 
    faGithub, 
    faCodepen, 
    faLinkedin, 
    faMedium 
} from '@fortawesome/free-brands-svg-icons';

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
                    <h3>Connect</h3>
                    <div className={s.underline}></div>
                    <ul className={s.socialMediaLinks}>
                        <li>
                            <a href="https://www.linkedin.com/in/sophanarith-sok-a50097b7/" 
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@sok213" target="_blank">
                                <FontAwesomeIcon icon={faMedium} />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:sokcodes@gmail.com">
                                <FontAwesomeIcon icon={faMailBulk} />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/sok213/" target="_blank">
                                <FontAwesomeIcon icon={faCodepen} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/sok213" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=lX64QPxtjBs" 
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LinksPanel;
