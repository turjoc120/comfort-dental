import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MainDrsCard = ({ drs }) => {
    const { name, info, img } = drs;

    return (
        <Col>
            <Card className='shadow-sm py-2'>
                <Card.Img variant="top" className='p-2 ' height="400" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info.slice(0, 150)}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default MainDrsCard;