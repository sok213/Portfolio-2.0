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
                    title: 'Fit Advisor',
                    desc: 'A very simple and easy tool for people to find out how to achieve their fitness goals based on their body types.',
                    animation: 'fadeInLeft'
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
                }
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
                            <DevItem 
                                className={item.type} 
                                description={item.desc} 
                                title={item.title} />
                        </Animated>
                    )
                })}
            </div>
        )
    }
}

export default DevPanel;
