import React from 'react';
import { Image } from 'react-bootstrap';
import '../styles/ToTopArrow.scss';

const ToTopArrow = (props) => {
    return (
        <a href={props.href} className="arrow-wrap">
            <Image className="arrowup" id="arrow" src="../images/icons/up-arrow.png" alt="Back to top arrow"/>
        </a>
    );
};

export default ToTopArrow;