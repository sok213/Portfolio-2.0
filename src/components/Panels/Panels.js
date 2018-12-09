import React, { Component } from 'react';
import s from './Panels.module.scss';
import PropTypes from 'prop-types';

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
            return (
                <div className={s.panelContents}>
                    <p>Panel #1</p>
                </div>
            );
        } else if (activePanel === 2) {
            return (
                <div className={s.panelContents}>
                    <p>Panel #2</p>
                </div>
            );
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

    renderButtons() {
        return (
            <div className={s.fadeIn}>
                <button onClick={this.props.prevSlide}>Previous slide.</button>
                <button onClick={this.props.nextSlide}>Next slide.</button>
            </div>
        )
    }

    render() {
        return (
            <div className={s.panelsContainer}>
                {this.props.rendering ? null : this.renderPanel()}
                {this.props.rendering ? null : this.renderButtons()}
            </div>
        )
    }
}

export default Panels;
