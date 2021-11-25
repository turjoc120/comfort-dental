
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const Details = () => {
    const services = useServices()
    const { serviceId } = useParams();

    const currentService = services.find(service => service.id === serviceId)

    return (
        <Container className='mt-4'>
            <img className='w-50 mx-auto' src={currentService?.img2} alt="" />
            <h2 className='text-capitalize my-4'>{currentService?.title}</h2>
            <p className="w-75 mx-auto">{currentService?.info}</p>
            <p className="w-75 mx-auto">{currentService?.info.slice(100, 500)}</p>
            <h5 className='fw-bold my-3'>Relax…your Dentist Knows Best</h5>
            <Button variant='info' className='rounded-pill px-5 fw-bold my-4'>Book Now</Button>
        </Container>
    );
};

export default Details;