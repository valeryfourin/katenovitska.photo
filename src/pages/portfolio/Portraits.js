import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Context } from '../../index';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import { COMPANY_NAME, routes } from '../../utils/consts';
import { isNotEmpty } from '../../utils/isEmpty';

const Portraits = () => {
    const { t } = useTranslation();
    const { portraits } = useContext(Context);

    document.title = t('menu.portraits')  + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap">
        <div className="fullwidth-banner" style={{backgroundImage: 'url(../images/general/portraits-banner.jpg)'}}>
            <h2 className="section-title">{t('menu.portraits')}</h2>
        </div>
            <Container className="item-wrap">
                {isNotEmpty(portraits) && Object.values(portraits).map((portrait) => (
                    <PortfolioItem key={portrait.url} className="list-item flex-column portfolio-preview arisen-item" title={portrait.title} url={portrait.url} src={portrait.previewImg} arr={portrait.photos} prevPage={routes.portraits}/>
                ))}
                {/* <PortfolioItem className="list-item flex-column portfolio-preview " title={denisse.title} url={denisse.url} src={denisse.preview} arr={denisse.photos} prevPage={currentPage}/>
                <PortfolioItem className="list-item flex-column portfolio-preview " title={mishell.title} url={mishell.url} src={mishell.preview} arr={mishell.photos} prevPage={currentPage}/> */}
            </Container>
        </section>
    );
};

export default Portraits;