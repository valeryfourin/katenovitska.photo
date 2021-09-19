import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import "../../styles/about/AboutMeSection.scss";
import { LOVESTORIES_ROUTE, PORTRAITS_ROUTE, WEDDINGS_ROUTE } from '../../utils/consts';

const AboutMeSection = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap arisen-item">
        <Container className="d-flex flex-column align-items-center">
            
            <Row><h2 className="section-title show-on-mobile hidden">{t('menu.about')}</h2></Row>
            <Row>
                <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center zoomOnHover">
                    <Image className="about-us-img" src="./images/general/photographer.jpg" alt="photographer avatar" title="Kate Novitska, photographer"/>
                </div>
                <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <Row><h2 className="section-title hide-on-mobile">{t('menu.about')}</h2></Row>
                    <div className="about-us-container container">
                        <h4 className="about-us-par-vocative mb-4">{t('aboutMe.name')}</h4>
                        <p className="about-us-par">{t('aboutMe.passion')}</p>
                        <p className="about-us-par">{t('aboutMe.bestPart')}</p>
                        <p className="about-us-par">{t('aboutMe.guarantee')}</p>
                        <p className="about-us-par">{t('aboutMe.work')}</p>

                        <ul>
                            <li><NavLink to={WEDDINGS_ROUTE}>{t('menu.weddings')}</NavLink></li>
                            <li><NavLink to={LOVESTORIES_ROUTE}>{t('menu.lovestories')}</NavLink></li>
                            <li><NavLink to={PORTRAITS_ROUTE}>{t('menu.portraits')}</NavLink></li>
                        </ul>

                    </div>
                </div>
                
            </Row>
        </Container>
    </section>
    );
};

export default AboutMeSection;