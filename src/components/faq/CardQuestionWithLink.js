import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../styles/faq/CardQuestion.scss';
import { CONTACT_ROUTE } from '../../utils/consts';

const CardQuestion = (props) => {
    return (
        <Card className={props.className + " accord-card"}>
          <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
            {props.question}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body>{props.answer1}
              <NavLink to={CONTACT_ROUTE}>{props.link}</NavLink>
              {props.answer2}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
};

export default CardQuestion;