import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './heart_book_icon_214933.png';
import Favorites from '../favorites/Favorites';


const NavBar = () => {
    
    

    return (  
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <img src={logo} style={{width:"2em"}}/>
                        <Navbar.Brand href="#">TinderBook</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Navbar.Brand>POWERED BY GOOGLE BOOKS</Navbar.Brand>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                    <div>
                        <Favorites/>
                    </div>
                </Navbar>
            ))}
        </>
    );
}
 
export default NavBar;