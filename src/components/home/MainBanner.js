import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
    
    const { t } = useTranslation();
    return (
        <div className="fullwidth-banner position-bottom arisen-item" style={{backgroundImage: 'url(../images/general/main-banner.jpg)'}}>
            <Col className="d-flex flex-column align-items-center">
                <h2 className="main-banner-text mt-5">
                </h2>
            </Col>
            
        </div>
    );
};

export default MainBanner;