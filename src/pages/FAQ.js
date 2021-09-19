import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CardQuestion from '../components/faq/CardQuestion';
import CardQuestionWithLink from '../components/faq/CardQuestionWithLink';
import ContactForm from '../components/home/ContactForm';
import { COMPANY_NAME } from '../utils/consts';

const FAQ = () => {
    const { t } = useTranslation();
    document.title = t('menu.faq') + ' - ' + COMPANY_NAME;
    return (
        <>
        <section className="wrap" id="faq">
            <div className="fullwidth-banner arisen-item" style={{backgroundImage: 'url(../images/general/faq-banner.jpg)'}}>
                <h2 className="section-title title-bg">{t('faq.title')}</h2>
            </div>
            <Row></Row>
            <Container className="mb-5 mt-5">
                <Accordion>
                  <CardQuestion className="arisen-item" question={t('faq.q1')} answer={t('faq.a1')} eventKey='1'/>
                  <CardQuestionWithLink className="arisen-item" question={t('faq.q2')} answer1={t('faq.a21')} answer2={t('faq.a22')} link={t('faq.a2link')}eventKey='13'/>
                  <CardQuestion className="arisen-item" question={t('faq.q3')} answer={t('faq.a3')} eventKey='3'/>
                  <CardQuestion className="arisen-item" question={t('faq.q4')} answer={t('faq.a4')} eventKey='4'/>
                  <CardQuestion className="arisen-item" question={t('faq.q5')} answer={t('faq.a5')} eventKey='5'/>
                  <CardQuestion className="arisen-item" question={t('faq.q6')} answer={t('faq.a6')} eventKey='6'/>
                  <CardQuestion className="arisen-item" question={t('faq.q7')} answer={t('faq.a7')} eventKey='7'/>
                  <CardQuestion className="arisen-item" question={t('faq.q8')} answer={t('faq.a8')} eventKey='8'/>
                  <CardQuestion className="arisen-item" question={t('faq.q9')} answer={t('faq.a9')} eventKey='9'/>
                  <CardQuestion className="arisen-item" question={t('faq.q10')} answer={t('faq.a10')} eventKey='10'/>
                  <CardQuestion className="arisen-item" question={t('faq.q11')} answer={t('faq.a11')} eventKey='11'/>
                  <CardQuestion className="arisen-item" question={t('faq.q12')} answer={t('faq.a12')} eventKey='12'/>
                  <CardQuestion className="arisen-item" question={t('faq.q13')} answer={t('faq.a13')} eventKey='13'/>
                  <CardQuestionWithLink className="arisen-item" question={t('faq.q14')} answer1={t('faq.a141')} answer2={t('faq.a142')} link={t('faq.a14link')}eventKey='14'/>
                </Accordion>
            </Container>
            
            <Container className="wrap">
                <Row><h2 className="section-subtitle text-style">{t('moreInfo.text1')}</h2></Row>
                <div >
                    <p className="section-text-main-font text-center">{t('moreInfo.text4')}</p>
                </div>
                <div className=" mb-3 d-flex w-100 align-items-center">
                    <ContactForm/>
                </div>
            </Container>
        </section>
        </>
    );
};

export default FAQ;