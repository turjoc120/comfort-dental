import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import qoute from '../../../images/quote.png';

const Reviews = () => {
    return (
        <div className="mt-5">
            <h1 className='fw-light'>Client Reviews</h1>
            <h2 className=" fw-light my-3">All-encompassing care,<br />
                a fresh approach to dentistry</h2>
            <Container className="mt-5 p-5">
                <Carousel>
                    <Carousel.Item>
                        <Row xs={1} md={2} lg={3} className='g-3'>
                            <Col>
                                <Card className='shadow-sm py-2 h-100'>
                                    <Card.Img variant="top" className='w-25 mx-auto p-2' src={qoute} />
                                    <Card.Body>
                                        <Card.Text>
                                            “I had an amazing experience. I have been to several offices, but this one really blew me away. I was beyond impressed with every detail of my visit.”
                                        </Card.Text>
                                        <h5>— Lauren Jewell</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-sm py-2 h-100'>
                                    <Card.Img variant="top" className='w-25 mx-auto p-2' src={qoute} />
                                    <Card.Body>
                                        <Card.Text>
                                            " I see Dr. Bowles and hygienist Megan and my experience has been top rate. Everyone is pleasant and helpful. I’ve been going about 10 years and I love it.."
                                        </Card.Text>
                                        <h5> — Lori S</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-sm py-2 h-100'>
                                    <Card.Img variant="top" className='w-25 mx-auto p-2' src={qoute} />
                                    <Card.Body>
                                        <Card.Text>
                                            “I have a history of disliking dentists. I’ve had a lot of pain and a lot and a lot of procedures done. And when I went to Dr. Jesse I had a painless experience for the first time and that just really changed things for me.“
                                        </Card.Text>
                                        <h5>— Mary Ann Jehn</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Carousel.Item>

                    <Carousel.Item>
                        <Row xs={1} md={2} lg={3} className='g-3'>
                            <Col>
                                <Card className='shadow-sm py-2 h-100'>
                                    <Card.Img variant="top" className='w-25 mx-auto p-2' src={qoute} />
                                    <Card.Body>
                                        <Card.Text>
                                            “My experience at Jackson Family Dental has been one of great professionalism and great service. They have the technology and everything you’re looking for in a dentist. But the thing that really keeps me and my family coming back are the relationships we’ve built.“
                                        </Card.Text>
                                        <h5>— Ben McNeal</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-sm py-2 h-100'>
                                    <Card.Img variant="top" className='w-25 mx-auto p-2' src={qoute} />
                                    <Card.Body>
                                        <Card.Text>
                                            “I love Swish!! I have been the technology and everything  a patient here for almost a year, my doctors are so knowledgeable, i love how they Take their time to explain everything to me."
                                        </Card.Text>
                                        <h5> — SOFIA B.</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-sm py-2 h-100'>
                                    <Card.Img variant="top" className='w-25 mx-auto p-2' src={qoute} />
                                    <Card.Body>
                                        <Card.Text>
                                            “Very good dental office! The staff was very nice and the dentist was nice too.“My visit to SWISH reminded me how simple it can be to just be treated right.“Clean, Personable, Relaxing environment."
                                        </Card.Text>
                                        <h5>— GABRIELLA S.</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Reviews;