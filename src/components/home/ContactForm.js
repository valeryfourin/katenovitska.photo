import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';
import TelInput from '../TellInput';
import '../../styles/faq/ContactForm.scss';

const ContactForm = (props) => {
    const { t } = useTranslation();
    return (
        <Container className={props.className + " contact-form arisen-item"}>
            <form 
                className="needs-validation" 
                action="https://formspree.io/f/mgepqpde" 
                method="POST" 
            >
                <div className={" wrap " + props.className}>
                    <div className="row form-inner">
                        <div className="col-sm-12 col-md-12 col-lg-5 d-flex flex-column justify-content-between">
                            <input className="form-control " id="validationCustom01" type="text" name="name" placeholder={t('form.name')} required />
                            <input className="form-control " id="validationCustom02" type="email" name="_replyto" placeholder="Email" required />
                            <TelInput />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7 ">
                            <textarea name="message" id="validationCustom04" className="form-control" placeholder={t('form.msg')} rows="6" cols="20" required></textarea>
                        </div>
                    </div>
                    <Btn type="submit" className="white" text={t('form.send')} variant="light"/>
                </div>
            </form>
        </Container>
    );
};

export default ContactForm;