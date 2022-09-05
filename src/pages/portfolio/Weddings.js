import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Context } from '../../index';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import { COMPANY_NAME, routes } from '../../utils/consts';
import { isNotEmpty } from '../../utils/isEmpty';

const Weddings = () => {
    const { t } = useTranslation();
    const { weddings } = useContext(Context);
    console.log(Object.values(weddings)) 
    document.title = t('menu.weddings')  + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap">
        <div className="fullwidth-banner arisen-item" style={{backgroundImage: 'url(../images/general/weddings-banner.jpg)'}}>
            <h2 className="section-title">{t('menu.weddings')}</h2> 
        </div>
            <Container className="item-wrap">
                {isNotEmpty(weddings) && Object.values(weddings).map((wedding) => (
                    <PortfolioItem key={wedding.url} className="list-item flex-column portfolio-preview arisen-item" title={wedding.title} url={wedding.url} src={wedding.previewImg} arr={wedding.photos} prevPage={routes.weddings}/>
                )
                )}
                {/* <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={weddings.mariaEmiliaIsrael.title} url={weddings.mariaEmiliaIsrael.url} src={weddings.mariaEmiliaIsrael.preview} arr={weddings.mariaEmiliaIsrael.photos} prevPage={routes.weddings}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={eliJose.title} url={eliJose.url} src={eliJose.preview} arr={eliJose.photos} prevPage={currentPage}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={marianaNico.title} url={marianaNico.url} src={marianaNico.preview} arr={marianaNico.photos} prevPage={currentPage}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={ludmilaMarcelo.title} url={ludmilaMarcelo.url} src={ludmilaMarcelo.preview} arr={ludmilaMarcelo.photos} prevPage={currentPage}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={aldanaJuanfer.title} url={aldanaJuanfer.url} src={aldanaJuanfer.preview} arr={aldanaJuanfer.photos} prevPage={currentPage}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={valeriaRicky.title} url={valeriaRicky.url} src={valeriaRicky.preview} arr={valeriaRicky.photos} prevPage={currentPage}/>
                <PortfolioItem className="list-item flex-column portfolio-preview arisen-item" title={nathyJoseLuis.title} url={nathyJoseLuis.url} src={nathyJoseLuis.preview} arr={nathyJoseLuis.photos} prevPage={currentPage}/> */}
            </Container>
        </section>
    );
};

export default Weddings;