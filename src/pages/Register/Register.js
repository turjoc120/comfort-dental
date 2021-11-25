
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import google from '../../images/google.png';

const Register = () => {
    const { googleSignIn, setName, setPass, error, setError, formSignUp, setEmail, setUser, setLoading } = useAuth();

    const getMail = (e) => {
        const mailVal = e.target.value;
        setEmail(mailVal)
    }

    const getPass = (e) => {
        const passVal = e.target.value;
        setPass(passVal)
    }

    const getName = (e) => {
        const nameVal = e.target.value;
        setName(nameVal)
    }

    const handelSignUp = (e) => {
        e.preventDefault()
        formSignUp()
            .then((res) => {
                setUser(res.user)
                history.push("/")
                console.log(res.user);
            })
            .finally(() => setLoading(false))
            .catch((error) => {
                setError(error.message)
            });
    }


    const history = useHistory()

    const handelGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user)
                history.push("/")
            })
            .finally(() => setLoading(false))
    }

    return (
        <div >

            <Row xs={1} md={2} lg={2}>
                <Col >
                    <img className='img-fluid' src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="" />
                </Col>
                <Col style={{
                    textAlign: 'left', backgroundColor: " #f3e6e8",
                    backgroundImage: " linear-gradient(315deg, #f1e6e8 0%, #d5d0e9 74%)"
                }} className='p-5'>
                    <p>We Care!</p>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'lighter' }}>Hello</h1>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bolder' }}>Register!</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={getName} type="text" placeholder="Full Name" className="border border-secondary" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onBlur={getMail} placeholder="Enter email" className="border border-secondary" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onBlur={getPass} placeholder="Password" className="border border-secondary" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        {<p className='text-danger fw-bold'><small>{error}</small></p>}
                        <Button onClick={handelSignUp} variant="primary " className="px-4 rounded" type="submit">
                            Register
                        </Button>
                        <p className='mt-2'>Already have a account <Link to="/login">Login Here</Link></p>
                    </Form>
                    <div className="w-50">< hr /></div>

                    <Button onClick={handelGoogle} variant="outline-primary" className='px-5 py-2 rounded-pill my-3 '><img src={google} width='20' className='me-2' alt="" />Sign In With Google</Button>
                </Col>
            </Row>

        </div>
    );
};

export default Register;