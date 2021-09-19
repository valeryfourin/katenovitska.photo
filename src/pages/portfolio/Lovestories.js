import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Context } from '../../index';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import { COMPANY_NAME } from '../../utils/consts';

const Lovestories = () => {
    const { t } = useTranslation();
    const {pattyOrlando, nikaDavid, anyaIllya} = useContext(Context);
    document.title = t('menu.lovestories')  + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap">
        <div className="fullwidth-banner" style={{backgroundImage: 'url(../images/general/lovestories-banner.jpg)'}}>
            <h2 className="section-title">{t('menu.lovestories')}</h2>
        </div>
            <Container className="item-wrap">
                <PortfolioItem className="list-item flex-column portfolio-preview " title={anyaIllya.title} url={anyaIllya.url} src={anyaIllya.preview} arr={anyaIllya.photos}/>
                <PortfolioItem className="list-item flex-column portfolio-preview " title={pattyOrlando.title} url={pattyOrlando.url} src={pattyOrlando.preview} arr={pattyOrlando.photos}/>
                <PortfolioItem className="list-item flex-column portfolio-preview " title={nikaDavid.title} url={nikaDavid.url} src={nikaDavid.preview} arr={nikaDavid.photos}/>
            </Container>
        </section>
    );
};

export default Lovestories;