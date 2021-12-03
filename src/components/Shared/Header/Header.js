import React from 'react';

import './Header.css'

import { ButtonGroup, Container, NavLink, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const Header = () => {

    return (
        <>
            <section id="header">
                <div class="container">
                    <Navbar class="navbar" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="navbar-nav ms-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link class="nav-item" >
                                        <a class="nav-link act" href="#">Home</a>
                                    </Nav.Link>
                                    <Nav.Link class="nav-item" >
                                        <a class="nav-link" href="#">Services</a>
                                    </Nav.Link>
                                    <Nav.Link class="nav-item" >
                                        <a class="nav-link" href="#">About Us</a>
                                    </Nav.Link>






                                </Nav>

                            </Navbar.Collapse>

                        </Container>

                    </Navbar>

                    <div class="middle">
                        <h1 class="text-white display-3 fw-bold">We Help you to find <span class="theme-text">a better
                            home</span>.</h1>
                    </div>
                </div>
                <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1"
                        d="M0,192L60,181.3C120,171,240,149,360,133.3C480,117,600,107,720,106.7C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>
                </svg>
            </section>










        </>
    );
};

export default Header;