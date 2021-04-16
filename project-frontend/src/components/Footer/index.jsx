import React from 'react';
import {Link} from 'react-router-dom'; 

// Libraries
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, 
FaWhatsappSquare, FaYoutube} from 'react-icons/fa';


//styles
import './Footer.css';

const Footer = () => {

    return (
        <>
            <div className="contauner-fluid">
                <footer className="bg-light text-center text-lg-start">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">                            
                                <p>
                                    <h5 className="txt-footer">Social Networks</h5>
                                <div className="d-flex justify-content-center">
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaLinkedin size="1.4x"/></a>
                                    </div>
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaFacebookSquare size="1.4x"/></a>
                                    </div> 
                                    <div className="icons">                                  
                                        <a href="#" className="img-icons"><FaInstagramSquare size="1.4x"/></a>
                                    </div> 
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaWhatsappSquare size="1.4x"/></a>
                                    </div> 
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaYoutube size="1.4x"/></a>
                                    </div> 
                                </div>                            
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="txt-footer">About us</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link as={Link} href="/" to = "/" className="text-dark">
                                            Our ethics
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link as={Link} href="/" to = "/" className="text-dark">
                                            Our story
                                        </Link>                                        
                                    </li>
                                    <li>
                                        <Link as={Link} href="/p" to = "/" className="text-dark">
                                            Our team
                                        </Link>
                                    </li>                               
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="txt-footer">Contact us</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link as={Link} href="/" to = "/" className="text-dark">
                                            Message
                                        </Link>                                        
                                    </li>
                                    <li>
                                        <Link as={Link} href="/" to = "/" className="text-dark">
                                            Offer
                                        </Link>                                        
                                    </li>                               
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="text-center p-3 copy" >
                         Copyright © 2021 Gilson - Klever Challenge
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Footer;

