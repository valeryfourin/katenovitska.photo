import React from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import '../../styles/CardCarousel.scss';
import ReviewCard from "./ReviewCard";

const CardCarousel = () => {
  const { t } = useTranslation();
  return (
    <Carousel>
      <Carousel.Item interval={2500}>
        <div className="review-item-wrap">

          <ReviewCard text={t('reviews.r1')} name={t('reviews.r1name')}/>
          <ReviewCard text={t('reviews.r2')} name={t('reviews.r2name')}/>
          <ReviewCard text={t('reviews.r3')} name={t('reviews.r3name')}/>
          {/* <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/man-1.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/woman-1.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="review-item">
            <Row>
              <Card.Img className="review-icon" variant="top" src="../images/icons/man-2.png" />
              <Card.Title>Name Surname</Card.Title>
            </Row>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card> */}

        </div>
      </Carousel.Item>

      

      <Carousel.Item interval={2500}>
        <div className="review-item-wrap">
          <ReviewCard text={t('reviews.r4')} name={t('reviews.r4name')}/>
          <ReviewCard text={t('reviews.r5')} name={t('reviews.r5name')}/>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CardCarousel;