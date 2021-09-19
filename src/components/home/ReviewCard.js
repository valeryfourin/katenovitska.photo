import React from 'react';
import { Card, Row } from 'react-bootstrap';

const ReviewCard = (props) => {
    return (
        <Card className="review-item">
        <Row>
          {/* <Card.Img className="review-icon" variant="top" src="../images/icons/man-1.png" /> */}
          <Card.Title>{props.name}</Card.Title>
        </Row>
        <Card.Body>
          <Card.Text>
            <cite>"{props.text}"</cite>
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default ReviewCard;