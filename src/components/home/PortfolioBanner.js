import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LOVESTORIES_ROUTE, PORTRAITS_ROUTE, WEDDINGS_ROUTE } from '../../utils/consts';
import CatchyQuote from './CatchyQuote';
import '../../styles/home/PortfolioBanner.scss';

const PortfolioBanner = () => {
    const { t } = useTranslation();
    return ( 
        <section className="wrap section-indent">
            {/* <Row><h2 className="section-title">{t('ourServices.title')}</h2></Row> */}
            <div className="fullwidth-banner arisen-item" style={{backgroundImage: 'url(../images/general/portfolio-main.jpg)'}}>
                <a href={WEDDINGS_ROUTE}>
                    <h3 className="section-title arisen-item">{t('menu.portfolio')} <span className="arrow-link">&#10148;</span> </h3>
                </a>
            </div>
            
            <Row>
                <CatchyQuote text={t('quote')}/>
            </Row>

            <Container className="item-wrap flex-column">
                <div className="portfolio-item arisen-item">
                    <a href={WEDDINGS_ROUTE}>
                    <div className="portfolio-preview-main zoomOnHover"><Image loading="lazy" src="./images/general/weddings-main.jpg" alt="weddings"/></div>
                        <p className="section-text-emphasys-font">
                            {t('menu.weddings')} 
                            <span className="arrow-link">&#10148;</span> 
                        </p>
                    </a>
                </div>

                <div className="item-wrap">
                    <div className="portfolio-item arisen-item">
                        <a href={LOVESTORIES_ROUTE}>
                        <div className="portfolio-preview-main zoomOnHover"><Image loading="lazy" src="./images/general/lovestories-main.jpg" alt="love stories"/></div>
                            <p className="section-text-emphasys-font"> 
                                {t('menu.lovestories')}
                                <span className="arrow-link">&#10148;</span>
                            </p>
                        </a>
                    </div>

                    <div className="portfolio-item arisen-item">
                        <a href={PORTRAITS_ROUTE}>
                            <div className="portfolio-preview-main zoomOnHover"><Image loading="lazy" src="./images/general/portraits-main.jpg" alt="portraits"/></div>
                            <p className="section-text-emphasys-font"> 
                                {t('menu.portraits')}
                                <span className="arrow-link">&#10148;</span>
                                
                            </p>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PortfolioBanner;