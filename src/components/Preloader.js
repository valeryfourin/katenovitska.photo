import React from 'react';
import { Image } from 'react-bootstrap';
import '../styles/Preloader.scss'

const Preloader = () => {
    return (
        <div className='preloader'>
            <Image className="preloader__item" src="../images/logo.png" alt="logo preloader" />
        </div>
    );
};

export default Preloader;