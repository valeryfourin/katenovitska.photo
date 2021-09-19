import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../../styles/home/ShippingSection.scss';

const ShippingSection = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap shipping-section">
            <Row><h2 className="section-title">{t('shipping.title')}</h2></Row>

            <Container className="list-wrap">
                <div className="list-item">
                    <div className="icon-wrap"><Image className="list-icon icon-1" src="./images/icons/1.png" alt="first step"/></div>
                    <p className="list-item-1">{t('shipping.step1')}</p>
                </div>

                <div className="list-item">
                    <div className="icon-wrap"><Image className="list-icon icon-2" src="./images/icons/2.png" alt="second step"/></div>
                    <p className="list-item-2">{t('shipping.step2')}</p>
                </div>

                <div className="list-item">
                    <div className="icon-wrap"><Image className="list-icon icon-3" src="./images/icons/3.png" alt="third step"/></div>
                    <p className="list-item-3">{t('shipping.step3')}</p>
                </div>

                <div className="list-item additional-item">
                    <p>{t('shipping.additional')}</p>
                </div>
                
            </Container>
        </section>
    );
};

export default ShippingSection;