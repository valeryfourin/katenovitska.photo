import React from 'react';

import AboutMeSection from '../components/about/AboutMeSection';
import { useTranslation } from 'react-i18next';
import { COMPANY_NAME } from '../utils/consts';
import InstaFeed from '../components/home/InstaFeed';
import Certificates from '../components/about/Certificates';

const About = () => {
    const { t } = useTranslation();
    document.title = t('menu.about') + ' - ' + COMPANY_NAME;
    return (
        <>
            <AboutMeSection />
            <Certificates />
            <InstaFeed />
        </>
    );
};

export default About;
