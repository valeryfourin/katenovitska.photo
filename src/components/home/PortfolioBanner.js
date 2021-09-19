import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LOVESTORIES_ROUTE, PORTRAITS_ROUTE, WEDDINGS_ROUTE } from '../../utils/consts';
import CatchyQuote from './CatchyQuote';
import '../../styles/home/PortfolioBanner.scss';

const PortfolioBanner = () => {
    const { t } = useTranslation();
    return ( 
        <section className="wrap">
            {/* <Row><h2 className="section-title">{t('ourServices.title')}</h2></Row> */}
            <div className="fullwidth-banner arisen-item" style={{backgroundImage: 'url(../images/general/portfolio-main.jpg)'}}>
                <NavLink to={WEDDINGS_ROUTE}>
                    <h3 className="section-title arisen-item">{t('menu.portfolio')} <span className="arrow-link">&#10148;</span> </h3>
                </NavLink>
            </div>
            
            <Row>
                <CatchyQuote text={t('quote')}/>
            </Row>

            <Container className="item-wrap flex-column">
                <div className="portfolio-item arisen-item">
                    <div className="portfolio-preview-main zoomOnHover"><Image loading="lazy" src="./images/general/weddings-main.jpg" alt="weddings"/></div>
                    <p className="section-text-emphasys-font">
                        <NavLink to={WEDDINGS_ROUTE}>
                            {t('menu.weddings')} 
                            <span className="arrow-link">&#10148;</span> 
                        </NavLink>
                    </p>
                </div>

                <div className="item-wrap">
                    <div className="portfolio-item arisen-item">
                        <div className="portfolio-preview-main zoomOnHover"><Image loading="lazy" src="./images/general/lovestories-main.jpg" alt="love stories"/></div>
                        <p className="section-text-emphasys-font"> 
                            <NavLink to={LOVESTORIES_ROUTE}>
                                {t('menu.lovestories')}
                                <span className="arrow-link">&#10148;</span>
                            </NavLink>
                        </p>
                    </div>

                    <div className="portfolio-item arisen-item">
                        <div className="portfolio-preview-main zoomOnHover"><Image loading="lazy" src="./images/general/portraits-main.jpg" alt="portraits"/></div>
                        <p className="section-text-emphasys-font"> 
                            <NavLink to={PORTRAITS_ROUTE}>
                                {t('menu.portraits')}
                                <span className="arrow-link">&#10148;</span>
                            </NavLink>
                        </p>
                    </div>
                </div>
                
                
            </Container>
        </section>
    );
};

export default PortfolioBanner;