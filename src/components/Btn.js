import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Btn.scss'

const Btn = (props) => {
    return (
        <Button className={props.className + " default-btn"} variant={props.variant} type={props.type}>{props.text}</Button>
    );
};

export default Btn;