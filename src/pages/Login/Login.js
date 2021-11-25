import React from 'react';
import google from '../../images/google.png';

import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../context/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const Login = () => {

    const { googleSignIn, setUser, setLoading, formSignIn, setloginEmail, setError, setloginPass } = useAuth();
    const location = useLocation();
    const history = useHistory()


    const getMail = (e) => {
        const mailVal = e.target.value;
        setloginEmail(mailVal)
    }

    const getPass = (e) => {
        const passVal = e.target.value;
        setloginPass(passVal)
    }


    const handelSignIn = (e) => {
        e.preventDefault()
        formSignIn()
            .then((res) => {
                setUser(res.user)
                console.log(res.user);
                history.push(location.state?.from)
            })
            .then(() => setLoading(false))
            .catch((error) => {
                setError(error.message)
            });

    }

    const handelGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user)
                history.push(location.state?.from)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div  >

            <div >

                <Row xs={1} md={2} lg={2}>
                    <Col >
                        <img className='img-fluid' src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg" alt="" />
                    </Col>
                    <Col style={{
                        textAlign: 'left', backgroundColor: "#ffffff",
                        backgroundImage: " linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"
                    }} className='p-5'>
                        <p>We care!</p>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'lighter' }}>Hello</h1>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bolder' }}>Login!</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={getMail} type="email" placeholder="Enter email" className="border border-secondary" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={getPass} type="password" placeholder="Password" className="border border-secondary" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button onClick={handelSignIn} variant="primary " className="px-4 rounded" type="submit">
                                Login
                            </Button>
                            <p className='mt-2'>dont have a account <Link to="/register">SignUp now</Link></p>
                        </Form>
                        <div className="w-50">< hr /></div>

                        <Button onClick={handelGoogle} variant="outline-primary" className='px-5 py-2 rounded-pill my-3 '><img src={google} width='20' className='me-2' alt="" />Sign In With Google</Button>
                    </Col>
                </Row>

            </div>

        </div>
    );
};

export default Login;