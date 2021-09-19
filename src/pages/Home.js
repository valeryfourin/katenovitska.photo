import React from 'react';
import '../styles/FullWidthBanner.scss';
import MainBanner from '../components/home/MainBanner';
import PortfolioBanner from '../components/home/PortfolioBanner';
import IntroSection from '../components/home/IntroSection';
import InstaFeed from '../components/home/InstaFeed';
import { COMPANY_NAME } from '../utils/consts';

const Home = () => {
    document.title = COMPANY_NAME;
   
    return (
        <>
            <MainBanner />
            <IntroSection />
            <PortfolioBanner />
            <InstaFeed />
        </>
    );
};

export default Home;