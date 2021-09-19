import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import {CONTACT_ROUTE} from '../../utils/consts';
import '../../styles/home/RequestSection.scss';
import Btn from '../Btn';
import ContactForm from './ContactForm';

const RequestSection = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap">
            <NavLink className="mb-5" to={CONTACT_ROUTE}>
                <Btn text={t('cooperation.text')} className="crimson" variant="danger" type="button"/>
            </NavLink>
            <div className="fullwidth-banner contact-banner hide-banner-img-on-mobile" style={{backgroundImage: 'url(../images/general/flowers-contact-bg.jpg)'}}>
                <ContactForm/>
            </div>
            
        </section>
    );
};

export default RequestSection;