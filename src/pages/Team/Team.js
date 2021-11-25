import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../images/team_banner.jpg'
import MainDrsCard from './MainDrsCard';

const Team = () => {
    const [mainDrs, SetMianDrs] = useState([]);
    const [allDocs, setAllDocs] = useState([]);

    useEffect(() => {
        fetch('/team.json').then(res => res.json())
            .then(data => SetMianDrs(data))
    }, [])


    useEffect(() => {
        fetch('/alldoctors.json')
            .then(res => res.json())
            .then(data => setAllDocs(data))
    }, [])

    return (
        <div className="mt-2 ">
            <Row xs={1} md={2} lg={2}>
                <Col>
                    <img src={img} className='img-fluid' alt="" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div className="banner"> <h5 className="fw-lighter ">Get to Know Us</h5>
                        <h1 className="fw-light">Hi! We’re ComFort Zone Dental…</h1>
                        <h5>We have Special People For Special Smiles</h5>
                        <Button variant="primary" className="px-4 py-2 mt-2">Schedule Your Visit</Button>

                    </div>
                </Col>
            </Row>
            <div className='mt-5'>
                <h1 style={{ borderBottom: '1px solid black ', display: 'inline-block' }} className="fw-lighter pb-2">Our Story</h1>
                <div className="px-3">
                    <p className="mb-4 ">At Comfort ZoneDental we help you celebrate the joy of a happy,<br /> healthy smile.</p>
                    We started our Liberty practice in 2010  with the goal of reimagining <br />the dental experience. We believe going to the<br /> dentist should be positive and empowering for the whole family,<br /> and we’re doing our to make that the new reality.<br /> Our office provides cutting-edge techniques, an experienced <br />team, and a whole lot of time spent making sure you feel comfortable.br<br />

                    It’s everything you need from a dentist, plus a little extra.
                </div>
            </div>
            <Container className="mt-4">
                <h2>Our Specialist</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        mainDrs.map((drs, index) => <MainDrsCard drs={drs} key={index} ></MainDrsCard>)
                    }
                </Row>
            </Container>
            <Container className="mt-5">
                <h2 className="fw-light">Meet All Our Hard Working Doctors </h2>
                <p>Smile!</p>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        allDocs.map((drs, index) => <MainDrsCard drs={drs} key={index} ></MainDrsCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Team;