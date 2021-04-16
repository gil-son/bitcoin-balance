import React from 'react';
import {Link} from 'react-router-dom'; 

//Libraries

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon} from 'mdbreact';



import { Nav } from 'react-bootstrap';

//styles
import './Card.css';


const CardsReciclo = () => {


    return (
        <>
            <MDBRow className="my-5 row">
                <MDBCol className="col-12 col-sm-4 px-3 d-flex justify-content-center">
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(22, 105, 122, 0.4), rgba(22, 105, 122, 0.5)), url('https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_960_720.jpg')"
                    }}
                    >
                    <div className='text-white mx-auto d-flex align-items-center py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-center'>
                                <strong>Meet our projects and team</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5 mx-auto d-flex justify-content-center">
                                <MDBIcon /> 
                                <Nav.Link className="btn btn-sm btn-success" as={Link} href="/projeto" to = "/projeto">
                                    Let me see
                                </Nav.Link>
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="col-12 col-sm-4 px-3 d-flex justify-content-center">
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_960_720.png')"
                    }}
                    >
                    <div className='text-white mx-auto d-flex align-items-center py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-center'>
                                <strong>Be a partner, tell us your story</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5 mx-auto d-flex justify-content-center">
                                <MDBIcon /> 
                                <Nav.Link className="btn btn-sm btn-dark" as={Link} href="/areciclo" to = "/areciclo">
                                    Let me see
                                </Nav.Link>                            
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="col-12 col-sm-4 px-3 d-flex justify-content-center">
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(23, 48, 114, 0.7), rgba(23, 48, 114, 0.7)), url('https://cdn.pixabay.com/photo/2018/06/07/12/28/target-group-3460039_960_720.jpg')"
                    }}
                    >
                    <div className='text-white mx-auto d-flex align-items-center py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-center'>
                                <strong>Discover our ethics and offers</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5 mx-auto d-flex justify-content-center">
                                <MDBIcon />
                                <Nav.Link className="btn btn-sm btn-primary " as={Link} href="/sejaparceiro" to = "/sejaparceiro">
                                    Let me see
                                </Nav.Link> 
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
}
        
export default CardsReciclo;
