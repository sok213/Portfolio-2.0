import React, { Component } from 'react';
import s from './TextCard.module.scss';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { 
    faJsSquare, 
    faReact,
    faHtml5,
    faCss3Alt
} from '@fortawesome/free-brands-svg-icons';

class TextCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSection: 3
        }
    }

    renderSection = () => {
        if(this.state.activeSection === 1) {
            return (
                <div className={s.textContent}>
                    <h1>My Story.</h1>
                    <p>I wrote my first line of code when in 2011. I wasn’t sure whether I wanted to make indie games, mobile apps, program robots, or build websites. What I knew for sure was that I wanted to spend my time programming and building virtual experiences. After delving into web development, I realized that I had a passion for UI/UX and front-front-end development.</p>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        } else if (this.state.activeSection === 2) {
            return (
                <div className={s.textContent}>
                    <p>As a kid I was very good at drawing and I had a passion for music. I was never good at math and I always had a hard time solving problems, especially when it required deep logic thinking. I was considered someone who was “left brain” dominant which meant I was naturally good at the arts, but not so much with numbers and solving problems. Programming proved to be a challenge and I wanted to get good at it because I felt that I needed to conquer a weakness. I saw an opportunity to face a weakness in the form of programming.</p>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        } else if (this.state.activeSection === 3) {
            return (
                <div className={s.textContent}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua: </p>
                    <div className={s.techIconsContainer}>
                        <Animated animationIn="fadeInLeft" isVisible={true}>
                            <ul className={s.techIcons}>
                                <li>
                                    <a 
                                        className={`${s.icon} ${s.javascriptLogo}`}
                                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faJsSquare} className={s.javascriptLogo} />
                                        <span className={s.subText}>JavaScript</span>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={`${s.icon} ${s.reactLogo}`}
                                        href="https://reactjs.org/"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faReact}/>
                                        <span className={s.subText}>React</span>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={`${s.icon} ${s.htmlLogo}`}
                                        href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faHtml5}/>
                                        <span className={s.subText}>HTML 5</span>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={`${s.icon} ${s.cssLogo}`}
                                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faCss3Alt}/>
                                        <span className={s.subText}>CSS 3</span>
                                    </a>
                                </li>
                            </ul>
                        </Animated>
                    </div>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        }
    }

    nextSlide = () => {
        this.setState({ activeSection: this.state.activeSection + 1 });
    }

    prevSlide = () => {
        this.setState({ activeSection: this.state.activeSection - 1 });
    }

    renderButton = () => {
        if(this.state.activeSection == 1) {
            return (
                <button onClick={this.nextSlide} className={s.navButton}>
                    <span className={s.buttonText}>Next</span>
                    <FontAwesomeIcon icon={faAngleRight} className={s.navIcon} />
                </button>
            );
        } else if(this.state.activeSection == 2) {
            return (
                <div className={s.horizontalButtonsContainer}>
                    <div className={s.horizontalButtons}>
                        <button onClick={this.prevSlide} className={s.navButton}>
                            <FontAwesomeIcon icon={faAngleLeft} className={s.navIcon} />
                            <span className={s.buttonText}>Back</span>
                        </button>
                        <button onClick={this.nextSlide} className={s.navButton}>
                            <span className={s.buttonText}>Next</span>
                            <FontAwesomeIcon icon={faAngleRight} className={s.navIcon} />
                        </button>
                    </div>
                </div>
            );
        } else if(this.state.activeSection === 3) {
            return (
                <div className={s.horizontalButtonsContainer}>
                    <div className={s.horizontalButtons}>
                        <button onClick={this.prevSlide} className={s.navButton}>
                            <FontAwesomeIcon icon={faAngleLeft} className={s.navIcon} />
                            <span className={s.buttonText}>Back</span>
                        </button>
                    </div>
                </div>
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
