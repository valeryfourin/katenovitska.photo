import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Context } from '../../index';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import { COMPANY_NAME } from '../../utils/consts';

const Weddings = () => {
    const { t } = useTranslation();
    const {valeriaRicky, laCarrionaAnna, aldanaJuanfer, nathyJoseLuis, ludmilaMarcelo} = useContext(Context);
    
    document.title = t('menu.weddings')  + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap">
        <div className="fullwidth-banner arisen-item" style={{backgroundImage: 'url(../images/general/weddings-banner.jpg)'}}>
            <h2 className="section-title">{t('menu.weddings')}</h2> 
        </div>
            <Container className="item-wrap">
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={ludmilaMarcelo.title} url={ludmilaMarcelo.url} src={ludmilaMarcelo.preview} arr={ludmilaMarcelo.photos}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={aldanaJuanfer.title} url={aldanaJuanfer.url} src={aldanaJuanfer.preview} arr={aldanaJuanfer.photos}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={valeriaRicky.title} url={valeriaRicky.url} src={valeriaRicky.preview} arr={valeriaRicky.photos}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={nathyJoseLuis.title} url={nathyJoseLuis.url} src={nathyJoseLuis.preview} arr={nathyJoseLuis.photos}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={laCarrionaAnna.title} url={laCarrionaAnna.url} src={laCarrionaAnna.preview} arr={laCarrionaAnna.photos}/>
            </Container>
        </section>
    );
};

export default Weddings;