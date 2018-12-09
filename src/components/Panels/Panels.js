import React, { Component } from 'react';
import s from './Panels.module.scss';
import PropTypes from 'prop-types';
import WelcomePanel from './WelcomePanel/WelcomePanel';
import AboutPanel from './AboutPanel/AboutPanel';

class Panels extends Component {

    constructor(props) {
        super(props);

        this.state = { 

        }
    }

    static propTypes = {
        prevSlide: PropTypes.func,
        nextSlide: PropTypes.func,
        activePanel: PropTypes.number,
        rendering: PropTypes.bool
    }

    renderPanel = () => {
        const activePanel = this.props.activePanel;
        if(activePanel === 1) {
            return <WelcomePanel />;
        } else if (activePanel === 2) {
            return <AboutPanel />;
        } else if (activePanel === 3) {
            return (
                <div className={s.panelContents}>
                    <p>Panel #3</p>
                </div>
            );
        } else if (activePanel === 4) {
            return (
                <div className={s.panelContents}>
                    <p>Panel #4</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={s.panelsContainer}>
                {this.props.rendering ? null : this.renderPanel()}
            </div>
        )
    }
}

export default Panels;
