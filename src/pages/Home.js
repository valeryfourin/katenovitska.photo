import React from 'react';
import '../styles/FullWidthBanner.scss';
import FrontImage from '../components/home/FrontImage';
import MainBanner from '../components/home/MainBanner';
import ReviewsSection from '../components/home/ReviewsSection';
import PortfolioBanner from '../components/home/PortfolioBanner';
import ShippingSection from '../components/home/ShippingSection';
import IntroSection from '../components/home/IntroSection';
import DivisionLine from '../components/DivisionLine';
import RequestSection from '../components/home/RequestSection';
import InstaFeed from '../components/home/InstaFeed';
import { COMPANY_NAME } from '../utils/consts';

const Home = () => {
    document.title = COMPANY_NAME;
   
    return (
        <>
            <MainBanner />
            {/* <FrontImage /> */}
            <IntroSection />
            <PortfolioBanner />
            {/* <ShippingSection /> */}
            {/* <ReviewsSection /> */}
            {/* <DivisionLine /> */}
            {/* <RequestSection /> */}
            <InstaFeed />
        </>
    );
};

export default Home;