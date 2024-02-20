import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { CONTACT_ROUTE } from '../../utils/consts';
import '../../styles/faq/CardQuestion.scss';

const CardQuestion = (props) => {
    return (
        <Card className={props.className + " accord-card"}>
          <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
            {props.question}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body>{props.answer1}
            <a href={CONTACT_ROUTE}>{props.link}</a>
              {props.answer2}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
};

export default CardQuestion;