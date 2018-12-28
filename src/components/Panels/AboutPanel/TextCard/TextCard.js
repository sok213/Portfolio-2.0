import React, { Component } from 'react';
import s from './TextCard.module.scss';
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
            activeSection: 1
        }
    }

    renderSection = () => {
        if(this.state.activeSection === 1) {
            return (
                <div className={s.textContent} key={1}>
                    <Animated animationIn="fadeIn" isVisible={true}>
                        <div>
                            <h1>My Story.</h1>
                            <p>I wrote my first line of code in 2011. I wasn’t sure whether I wanted to make indie games, mobile apps, program robots, or build websites. What I knew for sure was that I wanted to spend my time programming and building virtual experiences. After delving into web development, I realized that I had a passion for UI/UX and front-end web development.</p>
                        </div>
                    </Animated>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        } else if (this.state.activeSection === 2) {
            return (
                <div className={s.textContent} key={2}>
                    <Animated animationIn="fadeIn" isVisible={true}>
                        <div>
                            <p>As a kid I was very good at drawing and I had a passion for music. I struggled with math and I always had a hard time solving problems, especially when it required analytical and methodical thinking. I was considered someone who was <em>right brain</em> dominant which meant that I was naturally creative and had a talent for art, but not so much with numbers and problem solving. Programming proved to be a challenge and I wanted to get good at it because I was driven to conquer a weakness within myself.</p>
                        </div>
                    </Animated>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        } else if (this.state.activeSection === 3) {
            return (
                <div className={s.textContent} key={3}>
                    <Animated animationIn="fadeIn" isVisible={true}>
                        <div>
                            <p>Front-End development resonates with me because it is a combination of both art/design and problem solving. It is a skill that consists of artistic creativity, which is something that I am naturally good at, and problem solving which was once my weakness that I now consider to be a strength.</p>
                        </div>
                    </Animated>
                    <div className={s.buttonContainer}>
                        {this.renderButton()}
                    </div>
                </div>
            );
        } else if (this.state.activeSection === 4) {
            return (
                <div className={s.textContent} key={4}>
                    <Animated animationIn="fadeIn" isVisible={true}>
                        <div>
                            <p>For the past 7 years I built many projects using the following technolgies and I strive to continually improve upon my skills:</p>
                        </div>
                    </Animated>
                    <div className={s.techIconsContainer}>
                        <Animated animationIn="fadeInLeft" isVisible={true}>
                            <ul className={s.techIcons}>
                                <li>
                                    <a 
                                        className={`${s.icon} ${s.javascriptLogo}`}
                                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                        target="_blank"
                                        rel="noopener noreferrer"
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
                                        rel="noopener noreferrer"
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
                                        rel="noopener noreferrer"
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
                                        rel="noopener noreferrer"
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
        if(this.state.activeSection === 1) {
            return (
                <button onClick={this.nextSlide} className={s.navButton}>
                    <span className={s.buttonText}>Next</span>
                    <FontAwesomeIcon icon={faAngleRight} className={s.navIcon} />
                </button>
            );
        } else if (this.state.activeSection === 2 || this.state.activeSection === 3) {
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
        } else if (this.state.activeSection === 4) {
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
