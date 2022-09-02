import React from 'react';
import { Image } from 'react-bootstrap';
import '../styles/Footer.scss';

import { useTranslation } from 'react-i18next';
import { ABOUT_ROUTE, HOME_ROUTE, POLICY_ROUTE, WEDDINGS_ROUTE, CONTACT_ROUTE, FAQ_ROUTE } from '../utils/consts';
import Btn from './Btn';

const Footer = () => {
    
    const { t } = useTranslation();
    return (
        <>
            <div className="footer ">
                <div className="footer-bg"></div>
                <div className="container">
                        <a href={HOME_ROUTE}>
                            <Image className="logo footer-logo" src="../images/logo.png" alt="logo"/>
                        </a>
                        <div className=" socials">
                            <a href="mailto:katenovitska.photo@gmail.com" title="Email" >
                                <Image className="contact-img shadowed-element" src="../images/icons/socials/mail.png" alt="mail"/>
                            </a>
                            <a href="tel:+593-98-623-4056" title="Phone call">
                                <Image className="contact-img shadowed-element" src="../images/icons/socials/phone.png" alt="phone"/>
                            </a>
                            <a href="https://www.instagram.com/katenovitska.photo/" title="Instagram" rel="noreferrer" target="_blank">
                                <Image className="contact-img shadowed-element" src="../images/icons/socials/instagram.png" alt="instagram"/>
                            </a>
                            <a href="https://wa.me/593939211809" title="WhatsApp" rel="noreferrer" target="_blank">
                                <Image className="contact-img shadowed-element" src="../images/icons/socials/whatsapp.png" alt="whatsapp"/>
                            </a>
                            <a href="https://www.facebook.com/katenovitska.photo/" title="Facebook" rel="noreferrer" target="_blank">
                                <Image className="contact-img shadowed-element" src="../images/icons/socials/facebook.png" alt="facebook"/>
                            </a>
                        </div>
                        <div className="row">
                            <a className="indented-link" href={WEDDINGS_ROUTE}>{t('menu.weddings')}</a>•
                            <a className="indented-link" href={ABOUT_ROUTE}>{t('menu.about')}</a>•
                            <a className="indented-link" href={FAQ_ROUTE}>{t('menu.faq')}</a>•
                            <a className="indented-link" href={CONTACT_ROUTE}>{t('menu.contact')}</a>•
                            <a className="indented-link" href={POLICY_ROUTE}>{t('menu.policy')}</a>
                        </div>
                         
                        <a href={CONTACT_ROUTE}>
                            <Btn className="row white" variant="light" text={t('contactMe.text')}/>
                        </a>
                        <div className="row wrap">Web troubleshoot? Please contact &nbsp;<a href="mailto:valefourin@gmail.com">valefourin@gmail.com</a></div>
                        <div className="pb-4 wrap text-center">KN Photography Copyright &#169; 2022 all rights reserved </div>
                </div>
            </div>
        </>
    );
};

export default Footer;