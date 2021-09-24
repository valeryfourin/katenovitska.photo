import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import { NavLink } from 'react-router-dom';
// import { FAQ_ROUTE } from '../../utils/consts';
import '../../styles/home/InstaFeed.scss';

const InstaFeed = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap arisen-item">
            <Container className="list-wrap">
                <Row><h2 className="section-title text-style">{t('followSocialMedia.insta')}</h2></Row>
                    <div>
                        <a href="https://www.instagram.com/katenovitska.photo/" title="Instagram" rel="noreferrer" target="_blank">
                            <p className="section-text-main-font">@katenovitska.photo</p>
                        </a>
                    </div>
                <Row className="insta-feed-wrap item-wrap">
                    <a className="list-item zoomOnHover insta-post-icon" href="https://www.instagram.com/p/CTj1zNhrlnv/">
                        <Image src="../images/instafeed/post1.jpg" title="@katenovitska.photo" alt="instagram post"></Image>
                    </a>
                    <a className="list-item zoomOnHover insta-post-icon" href="https://www.instagram.com/p/CTpHpferQY9/">
                        <Image src="../images/instafeed/post5.jpg" title="@katenovitska.photo" alt="instagram post"></Image>
                    </a>
                    <a className="list-item zoomOnHover insta-post-icon" href="https://www.instagram.com/p/CM9tSRPruJC/">
                        <Image src="../images/instafeed/post2.jpg" title="@katenovitska.photo" alt="instagram post"></Image>
                    </a>
                    <a className="list-item zoomOnHover insta-post-icon" href="https://www.instagram.com/p/CNKkkXCreNl/">
                        <Image src="../images/instafeed/post4.jpg" title="@katenovitska.photo" alt="instagram post"></Image>
                    </a>
                </Row>
                    {/* <div className="additional-item">
                        <p>{t('moreInfo.text1')}</p>
                        <p>{t('moreInfo.text2')}
                            <NavLink className="active-link" to={FAQ_ROUTE}> FAQ</NavLink>
                        </p>
                        <p>{t('moreInfo.text3')}</p>
                        <p>{t('moreInfo.text4')}</p>
                    </div> */}
            </Container>
            

        </section>
    );
};

export default InstaFeed;