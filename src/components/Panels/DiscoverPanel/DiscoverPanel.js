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
            <div className={s.discoverPanelCompoonent}>
                <BlogPanel />
                <ContactPanel />
                <LinksPanel />
            </div>
        )
    }
}

export default DiscoverPanel;
