import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Context } from '../../index';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import '../../styles/portfolio/PortfolioPage.scss';
import Fancybox from '../../components/Fancybox';

const PortfolioPage = (props) => {
    const {title:pageTitle} = useParams()
    const {
        valeriaRicky, aldanaJuanfer, nathyJoseLuis, ludmilaMarcelo, marianaNico, eliJose, mariaEmiliaIsrael,
        pattyOrlando, nikaDavid, anyaIllya,
        denisse, mishell } = useContext(Context);

    const portfolioObjects = [
        valeriaRicky, aldanaJuanfer, nathyJoseLuis, ludmilaMarcelo, marianaNico, eliJose, mariaEmiliaIsrael,
        pattyOrlando, nikaDavid, anyaIllya,
        denisse, mishell];
        
    const [photoshootItem, setPhotoshootItem] = useState({})
    useEffect(() => {
        portfolioObjects.forEach(obj => {
            if (obj.url === pageTitle) {
                setPhotoshootItem(obj);
            }
        });
    });

    return (
        <>
        <section>
            <div className="fullwidth-banner " style={{backgroundImage: `url(${photoshootItem.photos && photoshootItem.photos[0].src})`}}>
                <h2 className="section-title">{photoshootItem.title}</h2>
            </div>
            <div onClick={() => window.history.back()}>
                <a className="indented-link" href={props.prevPage}>&#8701; Back</a>
            </div>
                <Fancybox options={{ infinite: false }}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 1100: 2, 1570: 3}}
                className="wrap section-indent"
            >
                <Masonry className="masonry-container">
                    {photoshootItem.photos && photoshootItem.photos.map(img => 
                    <div key={img.id} className="zoomOnHover ">
                        <Image 
                        className="photo-item item-lazy " 
                        src={img.src} 
                        loading="lazy"
                        data-fancybox="gallery"
                        data-src={img.src}
                        />
                        </div>
                    )}
                </Masonry>
            </ResponsiveMasonry>
                </Fancybox>
        </section>
        </>
    );
};

export default PortfolioPage;