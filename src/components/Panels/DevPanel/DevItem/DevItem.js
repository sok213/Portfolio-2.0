import React, { Component } from 'react';
import s from './DevItem.module.scss';

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
                        <h2>{this.props.title}</h2>
                        <div className={s.underline}></div>
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default DevItem;
