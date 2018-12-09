import React, { Component } from 'react';
import s from './DevPanel.module.scss';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import DevItem from './DevItem/DevItem.js';

class DevPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devItems: [
                {
                    title: 'Item #1',
                    desc: 'This is a test description',
                    animation: 'fadeInUpBig'
                },
                {
                    title: 'Item #2',
                    desc: 'This is a test description',
                    animation: 'fadeInDown'
                },
                {
                    title: 'Item #3',
                    desc: 'This is a test description',
                    animation: 'fadeInRight'
                },
                // {
                //     title: 'Item #4',
                //     desc: 'This is a test description',
                // },
                // {
                //     title: 'Item #5',
                //     desc: 'This is a test description',
                // }
            ]
        }
    }

    render() {
        return (
            <div className={s.devPanelContainer}>
                {this.state.devItems.map((item) => {
                    return (
                        <Animated 
                            animationIn={item.animation} 
                            isVisible={true} 
                            className={s.devItem}
                        >
                            <DevItem className={item.type} />
                        </Animated>
                    )
                })}
            </div>
        )
    }
}

export default DevPanel;
