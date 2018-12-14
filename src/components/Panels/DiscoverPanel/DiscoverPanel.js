import React, { Component } from 'react';
import s from './DiscoverPanel.module.scss';
import PropTypes from 'prop-types';
import BlogPanel from './BlogPanel/BlogPanel';
import ContactPanel from './ContactPanel/ContactPanel';
import LinksPanel from './LinksPanel/LinksPanel';

class DiscoverPanel extends Component {
    constructor(props) {
        super(props); 
        
        this.state = {

        }
    }

    render() {
        return (
            <div className={s.discoverPanelComponent}>
                <div className={s.leftPanel}>
                    <h1>Medium Publications</h1>
                    <BlogPanel />
                </div>
                <div className={s.rightPanel}>
                    <ContactPanel />
                    <LinksPanel />
                </div>
            </div>
        )
    }
}

export default DiscoverPanel;
