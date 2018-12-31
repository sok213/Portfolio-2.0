import React, { Component } from 'react';
import s from './DevItem.module.scss';
import thumbnail1 from './../../../../assets/thumbnail1.jpg';
// import thumbnail2 from './../../../../assets/thumbnail2.jpg';
import thumbnail3 from './../../../../assets/thumbnail3.jpg';

class DevItem extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    genImage() {
        if(this.props.thumbnail === 1) {
            return thumbnail1;
        } else if (this.props.thumbnail === 2) {
            // return thumbnail2;
        } else if (this.props.thumbnail === 3) {
            return thumbnail3;
        }
    }

    render() {
        return (
            <div 
                className={`
                    ${s.devItemContainer}
                    ${s[this.props.className]}
                `}
                style={{ background: `url(${this.genImage()})`}}
            >
                <a 
                    href={this.props.url}
                    rel="noopener noreferrer" 
                    target="_blank" 
                    className={s.hrefContainer}
                >
                    <div className={s.overlayTextContainer}>
                        <div className={s.overlayText}>
                            <h2>{this.props.title}</h2>
                            <div className={s.underline}></div>
                            {this.props.description}
                            <button className={s.viewCta}>View Project</button>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default DevItem;
