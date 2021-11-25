import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useServices()

    return (
        <div className='my-4' id="services">
            <h2 style={{ borderBottom: '2px solid lightblue' }} className="w-25 mx-auto pb-2 my-3">Our Services</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Services;