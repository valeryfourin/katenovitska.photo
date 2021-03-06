import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LangChoice from './LangChoice';
import '../styles/NavMenu.scss';
import { useTranslation } from 'react-i18next';
import { ABOUT_ROUTE, WEDDINGS_ROUTE, LOVESTORIES_ROUTE, PORTRAITS_ROUTE, CONTACT_ROUTE, FAQ_ROUTE, HOME_ROUTE} from '../utils/consts';

const NavBar = () => {

    const { t } = useTranslation();
    return (
        <>
        <LangChoice />
            <Navbar className="justify-content-around align-items-center container navmenu " expand="lg" >
                <Container className="menu-container">
                    <a href={HOME_ROUTE}>
                        <Image className="logo" src="../images/logo.png" alt="logo"/>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        >
                            <NavDropdown className="indented-link" title={t('menu.portfolio')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><a href={WEDDINGS_ROUTE}>{t('menu.weddings')}</a></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><a href={LOVESTORIES_ROUTE}>{t('menu.lovestories')}</a></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><a href={PORTRAITS_ROUTE}>{t('menu.portraits')}</a></NavDropdown.Item> 
                            </NavDropdown>
                            <span className="division-dot">•</span>
                            <a className="indented-link" href={ABOUT_ROUTE}>{t('menu.about')}</a>
                            <span className="division-dot">•</span>
                            <a className="indented-link" href={FAQ_ROUTE}>{t('menu.faq')}</a>
                            <span className="division-dot">•</span>
                            <a className="indented-link" href={CONTACT_ROUTE}>{t('menu.contact')}</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;