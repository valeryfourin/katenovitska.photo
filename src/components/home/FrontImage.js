import React from 'react';
import '../../styles/home/FrontImage.scss';

const FrontImage = () => {
    return (
        <div className="front-image-container" id="front-image-container" >
            <div className="front-image" id="front-image" style={{backgroundImage: 'url(../images/general/rose-petals.png)'}}/>
        </div>
    );
};

export default FrontImage;