import React, { Component } from 'react';
import s from './Panels.module.scss';

class Panels extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePanel: 1
        }
    }

    nextSlide = () => {
        if(this.state.activePanel !== 4) {
            this.setState({
                activePanel: this.state.activePanel + 1 
            });
        }
    }

    prevSlide = () => {
        if(this.state.activePanel !== 1) {
            this.setState({
                activePanel: this.state.activePanel - 1 
            });
        }
    }

    renderPanel = () => {
        const activePanel = this.state.activePanel;
        if(activePanel == 1) {
            return (
                <div className={s.panelContents}>
                    <p>Panel #1</p>
                </div>
            );
        } else if (activePanel == 2) {
            return (
                <div className={s.panelContents}>
                    <p>Panel #2</p>
                </div>
            );
        } else if (activePanel == 3) {
            return (
                <div className={s.panelContents}>
                    <p>Panel #3</p>
                </div>
            );
        } else if (activePanel == 4) {
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
                {this.renderPanel()}
                <button onClick={this.prevSlide}>Previous slide.</button>
                <button onClick={this.nextSlide}>Next slide.</button>
            </div>
        )
    }
}

export default Panels;
