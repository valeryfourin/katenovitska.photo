import React from 'react';
import { Image } from 'react-bootstrap';
import { PORTFOLIO_ROUTE } from '../../utils/consts';

const PortolioItem = (props) => {
    return (
        <div className={' ' + props.className}>
            <a href={PORTFOLIO_ROUTE + '/' + props.url}>
            <div className="portfolio-preview-main zoomOnHover">
                <Image src={props.src} alt="weddings"/>
            </div>
            <p className="section-text-emphasys-font text-center">{props.title}</p>
            </a>
        </div>
    );
};

export default PortolioItem;