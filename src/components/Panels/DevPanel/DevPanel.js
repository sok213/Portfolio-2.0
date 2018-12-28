import React, { Component } from 'react';
import s from './DevPanel.module.scss';
import { Animated } from 'react-animated-css';
import DevItem from './DevItem/DevItem.js';

class DevPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devItems: [
                {
                    title: 'Questhetics',
                    desc: <p>A website built with React to assist people to succeed in their quest for achieving an <em>aesthetic</em> physique based on their body type.</p>,
                    animation: 'fadeInLeft'
                },
                {
                    title: 'Item #2',
                    desc: <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>,
                    animation: 'fadeInDown'
                },
                {
                    title: 'PSD to HTML & CSS',
                    desc: <p>A beautiful responsive web page developed with bootstrap 3 which demonstrates the importance of knowing how to convert a mockup design into an interactive web page using HTML and CSS.</p>,
                    animation: 'fadeInRight'
                }
            ]
        }
    }

    render() {
        return (
            <div className={s.devPanelContainer}>
                {this.state.devItems.map((item, i) => {
                    return (
                        <Animated 
                            animationIn={item.animation} 
                            isVisible={true} 
                            className={s.devItem}
                            key={i}
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
