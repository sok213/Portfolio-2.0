import React, { Component } from 'react';
import s from './Panels.module.scss';

class Panels extends Component {
    render() {
        return (
            <div className={s.panelsContainer}>
                <p>Panels Container</p>
            </div>
        )
    }
}

export default Panels;
