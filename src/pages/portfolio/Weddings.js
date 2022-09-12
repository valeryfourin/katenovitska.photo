import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Context } from '../../index';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import { COMPANY_NAME, routes } from '../../utils/consts';
import { isNotEmpty } from '../../utils/isNotEmpty';

const Weddings = () => {
    const { t } = useTranslation();
    const { weddings } = useContext(Context);

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
            </Container>
        </section>
    );
};

export default Weddings;