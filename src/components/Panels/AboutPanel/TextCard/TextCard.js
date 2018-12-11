import React, { Component } from 'react';
import s from './TextCard.module.scss';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class TextCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSection: 1
        }
    }

    renderSection = () => {
        if(this.state.activeSection === 1) {
            return (
                <div className={s.textContent}>
                    <h1>Hello.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        } else if (this.state.activeSection === 2) {
            return (
                <div className={s.textContent}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua: </p>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        }
    }

    nextSlide = () => {
        this.setState({ activeSection: 2 });
    }

    prevSlide = () => {
        this.setState({ activeSection: 1 });
    }

    renderButton = () => {
        if(this.state.activeSection === 1) {
            return (
                <button onClick={this.nextSlide} className={s.navButton}>
                    <FontAwesomeIcon icon={faAngleRight} className={s.navIcon} />
                </button>
            );
        } else if(this.state.activeSection === 2) {
            return (
                <button onClick={this.prevSlide} className={s.navButton}>
                    <FontAwesomeIcon icon={faAngleLeft} className={s.navIcon} />
                </button>
            );
        }
    }

    render() {
        return (
            <div className={s.textCardContainer}>
                <Animated animationIn="slideInLeft" isVisible={true}>
                    {this.renderSection()}
                </Animated>
            </div>
        );
    }
}

export default TextCard;
