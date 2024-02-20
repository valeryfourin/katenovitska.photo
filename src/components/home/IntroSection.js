import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../styles/home/IntroSection.scss';
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';
import { ABOUT_ROUTE } from '../../utils/consts';

const IntroSection = () => {

    const { t } = useTranslation();
    return (
        <section className="wrap arisen-item">
            <Container className="d-flex flex-column align-items-center">
                <Row><h2 className="section-title">{t('homeIntro.welcome')}</h2></Row>
                <Row>
                    <div className="d-flex flex-column m-3 justify-content-center align-items-center">
                        <p className="section-text-emphasys-font text-style">{t('homeIntro.whoIAm')}</p>
                        <p>•••••</p>
                        <p className="section-text-emphasys-font text-style"><h3>{t('homeIntro.whyChooseMe')}</h3></p>
                        <p className="section-text-emphasys-font text-style">
                            <p><b>{t('homeIntro.reason1_highlight')}</b>{t('homeIntro.reason1')}</p>
                            <p><b>{t('homeIntro.reason2_highlight')}</b>{t('homeIntro.reason2')}</p>
                            <p><b>{t('homeIntro.reason3_highlight')}</b>{t('homeIntro.reason3')}</p>
                        </p>
                        <p>•••••</p>
                        <p className="section-text-emphasys-font text-style">{t('homeIntro.offer')}</p>
                        <p>•••••</p>
                        <p className="section-text-emphasys-font text-style">{t('homeIntro.work')}</p> 
                    </div>
                </Row>
                <a href={ABOUT_ROUTE}>
                    <Btn className="row white" variant="light" text={t('menu.about')}/> 
                </a>
            </Container>
        </section>
    );
};

export default IntroSection;