import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/home/ContactForm';
import { COMPANY_NAME } from '../utils/consts';

const Contact = () => {
    const { t } = useTranslation();
    document.title = t('menu.contact') + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap">
        <div className="fullwidth-banner arisen-item" style={{backgroundImage: 'url(../images/general/contact-banner.jpg)'}}>
            <h2 className="section-title title-bg">{t('contactMe.text')}</h2>
        </div> 
        <Container className="d-flex flex-column align-items-center arisen-item">
                <div className=" m-3 d-flex flex-column align-items-center">
                    <div className="container m-1">
                        <Row><p className="text-center">{t('contactMe.location')}</p>
                        </Row>
                        <Row className="mt-3">
                            <div className="col-4 list-wrap" title="Contact me">
                                <p>Instagram:</p>
                                <a href="https://www.instagram.com/katenovitska.photo/" rel="noreferrer" target="_blank">@katenovitska.photo</a>
                            </div>
                            <div className="col-4 list-wrap" title="Email me">
                                <p>Email:</p>
                                <a href="mailto:info@assercoex.com">katenovitska.photo@gmail.com</a>
                            </div>
                            <div className="col-4 list-wrap" title="Call me">
                                <p>{t('contactMe.number')}:</p>
                                <a href="tel:+593-98-623-4056">+593-98-623-4056</a>
                            </div>
                        </Row>
                        <Row className="list-item justify-content-center mt-5"> 
                            <u>
                                <a title="Viber" href="viber://chat?number=+593939211809">Viber</a>, 
                                <a title="WhatsApp" href="https://wa.me/593939211809">WhatsApp</a>, 
                                <a title="Telegram" href="tg://resolve?domain=katenovitska">Telegram</a>,
                                <a title="Facebook" href="https://www.facebook.com/katenovitska.photo/">Facebook</a>    
                            </u>
                        </Row>
                        
                    </div>
                </div>
                <Container className="wrap mt-5">
                    <Row><h2 className="section-subtitle text-style">{t('contactMe.text')}</h2></Row>
                    <div >
                        <p className="section-text-main-font text-center">{t('moreInfo.text4')}</p>
                    </div>
                    <div className=" mb-3 d-flex w-100 align-items-center">
                        <ContactForm/>
                    </div>
            </Container>
        </Container>
    </section>
    );
};

export default Contact;