import React, { Component } from 'react';
import s from './DevItem.module.scss';
import thumbnail1 from './../../../../assets/simplereactaccordion.jpg';
import thumbnail2 from './../../../../assets/thumbnail2.jpg';
import thumbnail3 from './../../../../assets/thumbnail3.jpg';

class DevItem extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    genImage() {
        const { thumbnail } = this.props;

        if(thumbnail === 1) {
            return thumbnail1;
        } else if (thumbnail === 2) {
            return thumbnail2;
        } else if (thumbnail === 3) {
            return thumbnail3;
        }
    }

    openLink(link) {
      window.open(link, '_target');
    }

    render() {

        const {
            className,
            url,
            title,
            description,
            githubLink
        } = this.props;

        return (
            <div 
                className={`
                    ${s.devItemContainer}
                    ${s[className]}
                `}
                style={{ background: `url(${this.genImage()})`}}
            >
                {/* <a 
                    href={url}
                    rel="noopener noreferrer" 
                    target="_blank" 
                    className={s.hrefContainer}
                > */}
                    <div className={s.overlayTextContainer}>
                        <div className={s.overlayText}>
                            <h2>{title}</h2>
                            <div className={s.underline}></div>
                            {description}
                            <div className={s.ctaContainer}>
                              <button 
                                className={s.viewCta}
                                onClick={this.openLink.bind(null, url)}
                              >
                                View Project
                              </button>
                              <button 
                                className={s.viewCta}
                                onClick={this.openLink.bind(null, githubLink)}
                              >
                                Source Code
                              </button>
                            </div>
                        </div>
                    </div>
                {/* </a> */}
            </div>
        )
    }
}

export default DevItem;
