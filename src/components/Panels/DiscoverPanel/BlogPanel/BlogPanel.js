import React, { Component } from 'react';
import s from './BlogPanel.module.scss';
import PropTypes from 'prop-types';

class BlogPanel extends Component {
    constructor(props) {
        super(props); 
        
        this.state = {

        }
    }

    render() {
        return (
            <div className={s.BlogPanelCompoonent}>
                <p>BlogPanel Component.</p>
            </div>
        )
    }
}

export default BlogPanel;
