import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../styles/home/IntroSection.scss';
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE } from '../../utils/consts';

const IntroSection = () => {

    const { t } = useTranslation();
    return (
        <section className="wrap arisen-item">
            <Container className="d-flex flex-column align-items-center">
                <Row><h2 className="section-title">{t('homeIntro.welcome')}</h2></Row>
                <Row>
                    
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="section-text-emphasys-font text-style">
                        {t('homeIntro.whoIAm')}
                        {t('homeIntro.offer')}
                        {t('homeIntro.work')}
                        </p>
                    </div>
                </Row>
                <NavLink to={ABOUT_ROUTE}>
                    <Btn className="row white" variant="light" text={t('menu.about')}/> 
                </NavLink>
            </Container>
        </section>
    );
};

export default IntroSection;