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
                <p>DevItem Component</p>
            </div>
        )
    }
}

export default DevItem;
