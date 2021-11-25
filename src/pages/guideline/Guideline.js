import React from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';

const Guideline = () => {
    return (
        <div>
            <Row style={{
                backgroundColor: "#ffffff",
                backgroundImage: " linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"
            }} xs={1} md={2} lg={2}>
                <Col>
                    <img className='w-75 mx-auto py-5' src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div >
                        <div> <h1 className="fw-lighter">
                            No Insurance? No Problem!</h1>
                            <p className='fs-5 px-3 my-3'>If you do have dental insurance, that’s awesome. We’ll handle all the paperwork and file claims on your behalf. But if you don’t have dental insurance, don’t worry. We offer an in-office membership plan and accept CareCredit, too.</p></div>
                    </div>
                </Col>
            </Row>

            <div className="my-5 w-50 mx-auto">
                <h1 className='fs-1 fw-bolder text-black-50'>Let's make dental different</h1>
                <h2 className='fw-lighter'>Join the team that makes going to the dentist an experience you actually look forward to</h2>
            </div>

            <Row style={{
                backgroundColor: "#ffffff",
                backgroundImage: " linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"
            }} xs={1} md={2} lg={2}>

                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <div> <h1 className="fw-lighter mt-5">
                            State-of-the-art technology</h1>
                            <p className='fs-5 my-3 px-3 '>We’re proud to be the only dentist in Liberty to offer Solea Laser treatments.

                                This revolutionary laser technology allows us to perform routine procedures without drills, injections, scalpels, or loud noises. There’s no pain and no need for anesthesia! </p></div>
                        <Button variant='primary' className="button px-5 py-3 rounded-pill">Make An Appointment <i className="fas fa-file-signature"></i></Button>
                    </div>
                </Col>
                <Col>
                    <img className='py-5 img-fluid' src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                </Col>
            </Row>
            <Container>
                <div className="mt-4">
                    <h1 className="fw-light mb-3">FAQ's</h1>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>Do I Really Need a Root Canal?</h3>
                        <p className="mt-3">Root canals are like fillings inside of the nerve chamber. <br /> They are used when an infection has reached deep into the tooth. Simply covering that <br />infection with a filling or crown would trap it in place, causing repetitive <br />abscesses. The only option other than a root canal is to have the tooth extracted.</p>
                    </div>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>Can My Tooth be Filled Instead of Crowned?</h3>
                        <p className="my-2">When can a tooth no longer have a filling but need something more  <br />complex like a crown? When there is no longer enough tooth structure to <br /> “fill.” Having enough healthy enamel to support the filling during everyday use <br /> is essential, otherwise the tooth will break apart and be non-restorable. Crowns cover the entire tooth  <br />and help even very weak teeth to last several more years.</p>
                    </div>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>Do I Need a Deep Cleaning?</h3>
                        <p className="my-2">If you have evidence of deep gum pockets, a  <br />deep cleaning is essential. Regular home care will not reverse this phase of gum  <br />disease on its own. By removing buildup from these deep areas, <br /> you can prevent tooth and bone loss.</p>
                    </div>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>Why Are My Child’s Teeth Yellow?</h3>
                        <p className="my-2">Adult teeth have very thick dentin below the enamel. <br /> By nature, dentin is yellow in appearance, <br /> giving adult teeth a different color than baby teeth (which have very little dentin, <br /> and are consequently very white in color.</p>
                    </div>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>My Child’s Teeth are Erupting Behind <br /> Their Baby Teeth. Is This Normal?</h3>
                        <p className="my-2">Sometimes this happens, but it is nothing to be alarmed about <br />. The permanent tooth usually begins to push the baby  <br />tooth out of place until it becomes loose and falls out on its own..</p>
                    </div>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>Is Whitening Safe?</h3>
                        <p className="my-2">Absolutely. Our gels use natural ingredients that lift stain particles  <br />from the pores of the teeth, providing straightforward results <br /> that are extremely noticeable. Click here to learn more <br /> about our teeth whitening services.</p>
                    </div>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>How Often Do I Need X-Rays?</h3>
                        <p className="my-2">Low radiation digital x-rays are an important part of assessing your oral <br /> health and screening for complex dental problems.  <br />Most adults require bitewing x-rays once a year, or a full <br /> mouth series of films every 3 to 5 years..</p>
                    </div>
                    <div className='text-start my-5 px-3 px-lg-0'>
                        <h3>Am I A Candidate for Sedation?</h3>
                        <p className="my-2">Most healthy patients are candidates for sedation. We will review  <br />your medical history with you prior to recommending the <br /> treatment. One of the most common contraindications for nitrous sedation is <br /> a blocked airway due to sinus infections.

                            We’re always here to help. If you don’t see an answer <br /> to your oral health question, please call us..</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Guideline;