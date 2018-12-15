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
                    title: 'Questhetics',
                    desc: <p>A very simple and easy tool to assist people to suceed in their quest for achieving an <em>aesthetic</em> physique based on their body type.</p>,
                    animation: 'fadeInLeft'
                },
                {
                    title: 'Item #2',
                    desc: <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>,
                    animation: 'fadeInDown'
                },
                {
                    title: 'Item #3',
                    desc: <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>,
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
