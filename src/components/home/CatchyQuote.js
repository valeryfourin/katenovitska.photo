import React from 'react';
import '../../styles/home/CatchyQuote.scss';

const CatchyQuote = (props) => {
    return (
        <div className="wrap catchy-quote arisen-item m-5">
          {props.text}  
        </div>
    );
};

export default CatchyQuote;