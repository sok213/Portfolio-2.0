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
                    title: 'Torres Packing',
                    desc: <p>A landing page built for a small local shipping company that ships packages to Mexico.</p>,
                    animation: 'fadeInLeft',
                    thumbnail: 1,
                    url: 'http://torrespacking.com/'
                },
                {
                    title: 'Some Digital Agency',
                    desc: <p>A satirical webpage that represents many digital agency websites that are prevalent across the tech industy. This project was built with React, Flexbox, and Sass.</p>,
                    animation: 'fadeInDown',
                    thumbnail: 2,
                    url: 'https://www.somedigitalagency.com/'
                },
                {
                    title: 'PSD to HTML & CSS',
                    desc: <p>A beautiful responsive web page developed with bootstrap 3 which demonstrates the importance of knowing how to convert a mockup design into an interactive web page using HTML and CSS.</p>,
                    animation: 'fadeInRight',
                    thumbnail: 3,
                    url: 'https://sok213.github.io/psd-to-html/'
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
                            className={s.devItemContainer}
                            key={i}
                        >
                            <DevItem 
                                url={item.url}
                                thumbnail={item.thumbnail}
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
