import React from 'react';
import './Footer.css'
import logo from '../../../images/logo/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer section">

                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">

                                    <div className="single-footer f-about">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src={logo} alt="#" />
                                            </a>
                                        </div>
                                        <p>Find the best car model with best car company.</p>
                                        <p className="copyright-text"><span>© 2021.</span>Designed and Developed by <a
                                            rel="nofollow" target="_blank">wiperstory</a>
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-6 col-12">

                                    <div className="single-footer f-link text-center">
                                        <h3 >Solutions</h3>
                                        <ul>
                                            <li><a href="#" className="text-decoration-none">Marketing</a></li>
                                            <li><a href="#" className="text-decoration-none">Analytics</a></li>
                                            <li><a href="#" className="text-decoration-none">Commerce</a></li>
                                            <li><a href="#" className="text-decoration-none">Insights</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-6 col-12">

                                    <div className="single-footer f-link">
                                        <h3>Support</h3>
                                        <ul>
                                            <li><a href="#" className="text-decoration-none">Pricing</a></li>
                                            <li><a href="#" className="text-decoration-none">Documentation</a></li>
                                            <li><a href="#" className="text-decoration-none">Guides</a></li>
                                            <li><a href="#" className="text-decoration-none">API Status</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12">

                                    <div className="single-footer newsletter">
                                        <h3>Subscribe</h3>
                                        <p>Subscribe to our newsletter for the latest updates</p>
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input name="EMAIL" placeholder="Email address" required="required" type="email" />
                                            <div className="button">
                                                <button className="sub-btn"><i className="lni lni-envelope"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;