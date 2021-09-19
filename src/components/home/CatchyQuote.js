import React from 'react';
import '../../styles/home/CatchyQuote.scss';

const CatchyQuote = (props) => {
    return (
        <div className="wrap catchy-quote arisen-item">
          {props.text}  
        </div>
    );
};

export default CatchyQuote;