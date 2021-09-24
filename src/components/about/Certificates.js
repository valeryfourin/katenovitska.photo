import React from 'react';
import { Image } from 'react-bootstrap';
import "../../styles/about/Certificates.scss";

const Certificates = () => {
    return (
        <section className="wrap section-indent arisen-item">
            <div className="certificates">
                <div className="cert-in-row">

                    <div className="cert-in-column">
                        <Image className="col-12 " src="./images/general/certificates/certificate lightroom.jpg"/>
                        <Image className="col-12 " src="./images/general/certificates/certificate photoshop.jpg"/>
                    </div> 
                    <div class="cert-in-column">
                        <Image className="col-12 " src="./images/general/certificates/certificate holycam.png"/>
                    </div>
                    
                </div>
                <div class="cert-in-row mywed-badge mt-5" >
                    <a title="Лучшие фотографы со всего мира на MyWed" href="https://mywed.com/es/photographer/katenovitska/" target="_blank" rel="noreferrer" >
                        <img alt="Лучшие фотографы со всего мира на MyWed" src="https://mywed.com/images/mywed-logo/logo_mywed_gorizontal_black.svg" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Certificates;