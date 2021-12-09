import React from 'react';
import './Footer.css'
import logo from '../../../images/logo/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>




            <div className="footer">
                <div className="inner-footer">


                    <div className="footer-items">
                        <h1>Company Name</h1>
                        <p>Description of your company product company.</p>
                    </div>


                    <div className="footer-items">
                        <h3>Quick Links</h3>
                        <div className="border1"></div>
                        <ul>
                            <a href="#"><li>Home</li></a>
                            <Link to="/privacy"><a href="#"><li>Prrivacy & Policy</li></a></Link>
                            <a href="#"><li>Contact Us</li></a>
                            <a href="#"><li>About</li></a>
                        </ul>
                    </div>


                    <div className="footer-items">
                        <h3>Recipes</h3>
                        <div className="border1"></div>
                        <ul>
                            <a href="#"><li>Indian</li></a>
                            <a href="#"><li>Chinese</li></a>
                            <a href="#"><li>Mexican</li></a>
                            <a href="#"><li>Italian</li></a>
                        </ul>
                    </div>


                    <div className="footer-items">
                        <h3>Contact us</h3>
                        <div className="border1"></div>
                        <ul>
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
                        </ul>


                        <div className="social-media">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-google-plus-square"></i></a>
                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    Copyright &copy; wiper story 2021.
                </div>
            </div>




        </div>
    );
};

export default Footer;