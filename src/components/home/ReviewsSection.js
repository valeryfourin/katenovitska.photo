import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CardCarousel from './CardCarousel';

const ReviewsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap">
            <Row><h2 className="section-title">{t('reviews.title')}</h2></Row>
            <Container>
                
                <CardCarousel />
            </Container>
        </section>
    );
};

export default ReviewsSection;