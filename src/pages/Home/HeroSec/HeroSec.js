import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './HeroSec.css';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const HeroSec = () => {


    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-black captions" >
                    <h1 className='fw-normal'>Make Your <span className='text-primary fw-bolder'>Teeth</span> <br />Stronger And A Lot Batter</h1>
                    <p>with best fecilities and better equipments you are in safe hands <br /> your smile is our priority</p>
                    <Button variant='outline-primary' className="button">Make An Appointment <i className="fas fa-file-signature"></i></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className="text-black captions"  >
                    <h1 className='fw-normal'>Our <span className='text-primary fw-bolder'>Experts</span>Are <br /> Ready To Give heir Best</h1>
                    <p>with best fecilities and better equipments you are in safe hands <br /> your smile is our priority</p>
                    <Button variant='outline-dark' className='px-4 button'>Contact Now <i className="fas fa-tooth"></i></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className="text-black captions" >
                    <h1 className='fw-normal'>From Simple<span className='text-primary fw-bolder'> Procedures</span> <br />To Bigger Operations </h1>
                    <p>with best fecilities and better equipments you are in safe hands <br /> your smile is our priority</p>
                    <Button variant='outline-dark' className='px-4 button'>Consult A Dentist <i className="fas fa-calendar-check"></i></Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSec;