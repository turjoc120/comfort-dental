import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notImg from '../../images/404.jpg';

const NotFound = () => {

    const history = useHistory();
    const handelGoBack = () => {
        history.push('/')
    }

    return (
        <div>
            <img src={notImg} className='img-fluid' alt="" />
            <Button variant="outline-primary" onClick={handelGoBack}>Go Back To Home</Button>
        </div>
    );
};

export default NotFound;