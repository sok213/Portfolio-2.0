import React, { Component } from 'react';
import s from './ImageCard.module.scss';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.imageCardContainer}>
                <Animated animationIn="fadeInDown" isVisible={true} className={s.test}>
                    <div className={s.imageCardContent}>
                        <p>ImageCard Component.</p>
                    </div>
                </Animated>
            </div>
        )
    }
}

export default ImageCard;
