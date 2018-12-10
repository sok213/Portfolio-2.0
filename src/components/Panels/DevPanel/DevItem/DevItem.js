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
                        <h4>Title</h4>
                        <div className={s.underline}></div>
                        <p>Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevItem;
