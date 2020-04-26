import React, { Component } from 'react';
import s from './DevPanel.module.scss';
import { Animated } from 'react-animated-css';
import DevItem from './DevItem/DevItem.js';

// TODO: 
// - Remove torres packing
// - Add npm package.
// - Add my minimal dashboard.
// - Add view source code link.

class DevPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devItems: [
                {
                    title: 'React Accordion NPM Package',
                    desc: <p>A lightweight accordion component wrapped as an NPM package.</p>,
                    animation: 'fadeInLeft',
                    thumbnail: 1,
                    url: 'http://torrespacking.com/',
                    githubLink: 'https://github.com/sok213/simple-react-accordion-npm-package'
                },
                {
                    title: 'Some Digital Agency',
                    desc: <p>A satirical webpage that represents many digital agency websites that are prevalent across the tech industy. This project was built with React, Flexbox, and Sass.</p>,
                    animation: 'fadeInDown',
                    thumbnail: 2,
                    url: 'https://www.somedigitalagency.com/',
                    githubLink: 'https://github.com/sok213/some-digital-agency'
                },
                {
                    title: 'MyMinimalDash',
                    desc: <p>A lightweight simple dashboard that provides news, weather, and a checklist module to help you keep your day organized and up to date with an aesthetically pleasing design.</p>,
                    animation: 'fadeInRight',
                    thumbnail: 3,
                    url: 'https://sok213.github.io/psd-to-html/',
                    githubLink: 'https://github.com/sok213/MyMinimalDashboard'
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
                                title={item.title} 
                                githubLink={item.githubLink}
                            />
                        </Animated>
                    )
                })}
            </div>
        )
    }
}

export default DevPanel;
