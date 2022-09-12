import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Context } from '../../index';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import { COMPANY_NAME, routes } from '../../utils/consts';
import { isNotEmpty } from '../../utils/isNotEmpty';

const Lovestories = () => {
    const { t } = useTranslation();
    const { loveStories } = useContext(Context);

    document.title = t('menu.lovestories')  + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap">
        <div className="fullwidth-banner" style={{backgroundImage: 'url(../images/general/lovestories-banner.jpg)'}}>
            <h2 className="section-title">{t('menu.lovestories')}</h2>
        </div>
            <Container className="item-wrap">
                {isNotEmpty(loveStories) && Object.values(loveStories).map((loveStory) => (
                    <PortfolioItem key={loveStory.url} className="list-item flex-column portfolio-preview arisen-item" title={loveStory.title} url={loveStory.url} src={loveStory.previewImg} arr={loveStory.photos} prevPage={routes.loveStories}/>
                ))}
            </Container>
        </section>
    );
};

export default Lovestories;