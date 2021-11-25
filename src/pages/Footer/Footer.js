import React from 'react';
import './Footer.css';
import logo from '../../images/logo-dental.png';

const Footer = () => {
    return (

        <footer >
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3 dark-grey-text">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <div className='d-flex mb-4 w-50 mx-auto'>
                            <img src={logo} width='70' alt="" />
                            <div className='brand'><span className='comfort'>COMFORT</span><span className='dental'>DENTAL</span></div>
                        </div>
                        <h5 className='my-3'>Catering to all of your dental needs and desires</h5>
                        <p>Our Dental Clinic is dedicated to providing the most up to date general, orthodontic and family dentistry.</p>
                    </div>


                    {/* links  */}

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold mb-4">Products</h6>
                        <p>
                            <a href="#!">About</a>
                        </p>
                        <p>
                            <a href="#!">Home</a>
                        </p>
                        <p>
                            <a href="#!">Services</a>
                        </p>
                        <p>
                            <a href="#!"> News</a>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold  mb-4">Useful links</h6>
                        <p>
                            <a href="#!">Your Account</a>
                        </p>
                        <p>
                            <a href="#!">Expert List</a>
                        </p>
                        <p>
                            <a href="#!">Service List</a>
                        </p>
                        <p>
                            <a href="#!">Help</a>
                        </p>
                    </div>


                    {/* address  */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold mb-4">Contact</h6>
                        <p>
                            <i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i> info@example.com</p>
                        <p>
                            <i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p>
                            <i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                </div>
            </div>

            {/* social links  */}
            <div >
                <div >
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="icon" href="#">
                                <i className="fab fa-facebook-f  me-4 fs-4"> </i>
                            </a>
                            <a className="icon" href="#">
                                <i className="fab fa-twitter  me-4 fs-4"> </i>
                            </a>
                            <a className="icon" href="#">
                                <i className="fab fa-google-plus-g  me-4 fs-4"> </i>
                            </a>
                            <a className="icon" href="#">
                                <i className="fab fa-linkedin-in me-4 fs-4"> </i>
                            </a>
                            <a className="icon" href="#">
                                <i className="fab fa-instagram fs-4"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" py-2">© 2021 Copyright: Turjo C.
            </div>
        </footer>


    );
};

export default Footer;