import React, { Component } from 'react';
import s from './ImageCard.module.scss';
import PropTypes from 'prop-types';

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.imageCardContainer}>
                <p>ImageCard Component.</p>
            </div>
        )
    }
}

export default ImageCard;
