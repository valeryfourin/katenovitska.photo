import React from 'react';
import { Nav } from 'react-bootstrap';
import i18n from '../i18n.js';
import ToTopArrow from './ToTopArrow';
import '../styles/LangChoice.scss';

const LangChoice = () => {
    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    const addCurrentLangClass = (e, lang) => {
        e.target.classList.add('current-lang');
        removeCurrentLangClassFromSibling(e);
        changeLanguage(lang)
    }

    const removeCurrentLangClassFromSibling = (e) => {
        const langLinks = document.querySelectorAll('.lang-link');
        langLinks.forEach(link => {
            if (link !== e.target) {
                link.classList.remove('current-lang');
            }
        });
    };

    return (
        <Nav className="nav-header " id="top">
            <div className="lang-options-header">
                <span className="lang-link" onClick={(e) => addCurrentLangClass(e, 'es')}>ES</span>
                <span className="lang-link" onClick={(e) => addCurrentLangClass(e, 'en')}>EN</span>
            </div>
            <ToTopArrow href="#top"/>
        </Nav>
    );
};

export default LangChoice;