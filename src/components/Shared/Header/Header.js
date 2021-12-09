import React from 'react';

import './Header.css'

import { ButtonGroup, Container, NavLink, Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import logo from '../../../images/logo/vector-logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const { user, logOut, admin } = useAuth()
    return (
        <>

            <div className="row">
                <div className="col-md-12">

                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto mx-0">
                                <Nav.Link>
                                    <Link className="text-navabr" to="/home">Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className="text-navabr" to="/make" >Car Make</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/contact" className="text-navabr" >Contact Us</Link>
                                </Nav.Link>

                                {admin && <Nav.Link>
                                    <Link to="/admin" className="text-navabr" >Admin</Link>
                                </Nav.Link>}

                                {user?.email ?

                                    <Button className="nav-button" onClick={logOut} variant="outline-secondary">LogOut {user.displayName}</Button>


                                    :
                                    <Nav.Link >
                                        <Link className="text-navabr" to="/login">LogIn</Link>
                                    </Nav.Link>



                                }

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                    <br />


                </div>
            </div>

        </>
    );
};

export default Header;