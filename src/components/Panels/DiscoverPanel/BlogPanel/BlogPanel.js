import React, { Component } from 'react';
import s from './BlogPanel.module.scss';

class BlogPanel extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            
        }
    }

    componentDidMount() {
        window.feedMirror();
    }

    render() {
        return (
            <div className={s.blogPanelContainer}>
                <div 
                    id="fm-medium-embed" 
                    className={s.feedMirrorContainer}
                >
                </div>
            </div>
        )
    }
}

export default BlogPanel;
