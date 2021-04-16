// React
import React from 'react';
import {Link, withRouter} from 'react-router-dom'; 

// Libraries
import {Nav, Navbar} from 'react-bootstrap';

//Components


// styles and images
import './Header.css';
import Logo from './img/logo.png';


function BaseMenu(props){

    const {location} = props;
    
        return( 
            
                    <Navbar className="navbar-warning py-1 px-5 fixed-top menu" expand="lg">
                        <Navbar.Brand as={Link} href="/" to = "/">
                            <img src={Logo} alt="logomarca Re-ciclo" className="img-logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="item-menu"/>
                        
                        <Navbar.Collapse id="item-menu" className="justify-content-between font-weight-bold">

                        </Navbar.Collapse>                        
                    </Navbar>                
        );    
}

export const Header = withRouter(BaseMenu);