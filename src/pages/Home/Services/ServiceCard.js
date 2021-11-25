import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css';

const ServiceCard = ({ service }) => {
    const { id, title, info, img } = service;

    return (
        <div>
            <Col className="card">
                <Card className='shadow-sm py-2 '>
                    <Card.Img variant="top" className='w-25 mx-auto p-2' src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {info.slice(0, 150)}
                        </Card.Text>
                        <Link to={`service/${id}`}><Button variant="outline-secondary" className=" px-4">Details</Button></Link>
                        <Button variant="outline-primary ms-3" className=" px-4">Consult <i className="fas fa-mouse-pointer"></i></Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceCard;