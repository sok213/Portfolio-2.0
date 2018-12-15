import React, { Component } from 'react';
import s from './DevItem.module.scss';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

class DevItem extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={`
                ${s.devItemContainer}
                ${s[this.props.className]}
            `}>
                <div className={s.overlayTextContainer}>
                    <div className={s.overlayText}>
                        <h4>{this.props.title}</h4>
                        <div className={s.underline}></div>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevItem;
