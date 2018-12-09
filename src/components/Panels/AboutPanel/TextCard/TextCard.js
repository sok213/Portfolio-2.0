import React, { Component } from 'react';
import s from './TextCard.module.scss';
import PropTypes from 'prop-types';

class TextCard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.textCardContainer}>
                <p>TextCard component.</p>
            </div>
        );
    }
}

export default TextCard;
