import React, { Component } from 'react';
import s from './Panels.module.scss';
import PropTypes from 'prop-types';
import WelcomePanel from './WelcomePanel/WelcomePanel';
import AboutPanel from './AboutPanel/AboutPanel';
import DevPanel from './DevPanel/DevPanel';
import DiscoverPanel from './DiscoverPanel/DiscoverPanel';

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
            return <DevPanel />;
        } else if (activePanel === 4) {
            return <DiscoverPanel />;
        }
    }

    isDev = () => {
        if(this.props.activePanel === 2) {
            return 'center';
        }

        return null;
    }

    render() {
        return (
            <div className={s.panelsContainer} style={{ alignItems: this.isDev() }}>
                {this.props.rendering ? null : this.renderPanel()}
            </div>
        )
    }
}

export default Panels;
