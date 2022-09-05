import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import '../styles/LangChoice.scss';
import i18n from '../i18n.js';
import ToTopArrow from './ToTopArrow';

const LangChoice = () => {
    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    return (
        <Nav className="nav-header " id="top">
            
            <div className="lang-options-header">
                <NavLink className="lang-link" onClick={(e) => {
                    e.target.classList.add('current-lang');
                    changeLanguage('es')}}>ES
                </NavLink>
                <NavLink className="lang-link" onClick={(e) => {
                    e.target.classList.add('current-lang');
                    changeLanguage('en')}}>EN
                </NavLink>
            </div>
            <ToTopArrow href="#top"/>
        </Nav>
    );
};

export default LangChoice;