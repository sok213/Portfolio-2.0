import React, { Component } from 'react';
import s from './ImageCard.module.scss';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import cafeImage from "../../../../assets/cafe.jpeg";

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.imageCardContainer}>
                <div className={s.imageCardContent}>
                    <Animated 
                        animationIn="fadeInDown" 
                        isVisible={true} 
                        className={s.imageCardItem}
                    >
                        <div className={s.imgContainer}>
                            <img src={cafeImage} className={s.imageCardItem} />
                        </div>
                    </Animated>
                </div>
            </div>
        )
    }
}

export default ImageCard;
