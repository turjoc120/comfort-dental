import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import logo from '../../../images/logo-dental.png';
import { HashLink } from 'react-router-hash-link';
import './HeaderNav.css';

const HeaderNav = () => {
    const { user, name, logOut } = useAuth();

    return (
        <Navbar bg="light" expand="lg" >
            <Container >
                <Navbar.Brand as={Link} to="/home" className='d-flex'><img src={logo} width='70' alt="" /><div className='brand'><span className='comfort'>COMFORT</span><span className='dental'>DENTAL</span></div></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                        <Nav.Link as={HashLink} to='/home#services'>Services</Nav.Link>
                        <Nav.Link as={Link} to="/team">Our Team</Nav.Link>
                        <Nav.Link as={Link} to="/guideline">GuideLine</Nav.Link>

                        {!user?.email && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {!user?.email && <Nav.Link as={Link} to="/register" ><Button variant="danger" className="rounded-pill px-4">SignUp</Button></Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to="/login"><i className="fas fa-user-circle me-1"></i>{user?.displayName ? user?.displayName : name}</Nav.Link>}
                        {user?.email && <Button onClick={logOut} variant="danger" className="rounded-pill px-4 py-0">Log Out</Button>}

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;