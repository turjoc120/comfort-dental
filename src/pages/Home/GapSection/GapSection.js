import React from 'react';
import { Col, Row } from 'react-bootstrap';
import nurseImg from '../../../images/2ndsec.jpg';

const GapSection = () => {
    return (
        <div className='my-5'>
            <h1 className="fw-lighter">Are You Ready To Change your Smile!</h1>
            <p className="w-50 mx-auto pb-2 mt-3 mb-5 fs-4">With amazing clinicians, state-of-the-art tech, and beautiful studios, care at Tend isn’t just painless, it’s a pleasure.</p>
            <Row xs={1} md={1} lg={2} className='g-4 align-items-center'>
                <Col>
                    <img src={nurseImg} className='img-fluid ' alt="" />
                </Col>
                <Col>
                    <Row xs={1} md={2} lg={2} className="g-3">
                        <Col>
                            <div className='shadow-lg border-secondary border p-3 '>
                                <img className='bg-info rounded-pill' src='https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon2.png' alt="" />
                                <h4>Highly trained dental team</h4>
                                <h6>Decades of experience
                                    Our clinical team is led by renowned clinicians.</h6>
                            </div>
                        </Col>
                        <Col>
                            <div className='shadow-sm border-secondary border p-3 '>
                                <img className='bg-info rounded-pill' src='https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon3.png' alt="" />
                                <h4>Science-based care team at service</h4>
                                <h6>We take advantage of all the latest research.and try to give our best  </h6>
                            </div>
                        </Col>
                        <Col>
                            <div className='shadow-lg border-secondary border p-3 '>
                                <img className='bg-info rounded-pill' src='https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon6.png' alt="" />
                                <h4>
                                    Extensive line of dental services</h4>
                                <h6>We know how busy your schedule is, so your appointment will always start on time with no waiting.</h6>
                            </div>
                        </Col>
                        <Col>
                            <div className='shadow-sm border-secondary border p-3 '>
                                <img className='bg-info rounded-pill' src='https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon5.png' alt="" />
                                <h4>Modern care with guaranteed smile</h4>
                                <h6>You may not get as excited as we do about our CEREC machine and 3D x-rays. But you’ll smile</h6>
                            </div>
                        </Col>

                    </Row>


                </Col>

            </Row>
        </div >
    );
};

export default GapSection;