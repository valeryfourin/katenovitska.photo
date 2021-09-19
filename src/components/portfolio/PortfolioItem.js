import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import {  useHistory, Link } from 'react-router-dom';
import { Context } from '../..';
import { PORTFOLIO_ROUTE } from '../../utils/consts';

const PortolioItem = (props) => {
    const history = useHistory()
    
    const {valeriaRicky, laCarrionaAnna, aldanaJuanfer, nathyJoseLuis, ludmilaMarcelo} = useContext(Context);
    return (
        <div className={' ' + props.className} 
        // onClick={() => history.push(PORTFOLIO_ROUTE + '/' + props.url)}
        >
            {/* <Link
                to={{
                    pathname: PORTFOLIO_ROUTE + '/' + props.url,
                    state: {
                    title: props.title,
                    },
                }}
            > */}
            <a href={PORTFOLIO_ROUTE + '/' + props.url}>
            <div className="portfolio-preview-main zoomOnHover"><Image src={props.src} alt="weddings"/></div>
            <p className="section-text-emphasys-font text-center">{props.title}</p>
            {/* </Link> */}
            </a>
        </div>
    );
};

export default PortolioItem;