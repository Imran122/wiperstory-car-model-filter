import React from 'react';
import './ContactUs.css'
import { Helmet } from 'react-helmet';
const ContactUs = () => {
    return (
        <>
            <Helmet>‍
                <title>Contact</title>
                <meta name="description" content="contact us" />
                <meta property="og:title" content="contact us" />
                <meta property="og:description" content="contact us" />
            </Helmet>
            <div>

                <div className="container">
                    <div className="section-contact">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                <div className="header-section text-center">
                                    <h2 className="title">Get In Touch
                                        <span className="dot"></span>
                                        <span className="big-title">CONTACT</span>
                                    </h2>
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur commodo risus, nec pellentesque turpis efficitur non.</p>

                                </div>
                            </div>
                        </div>
                        <div className="form-contact">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <i className="fas fa-user"></i>
                                            <input type="text" name="name" placeholder="ENTER YOUR NAME" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" name="email" placeholder="ENTER YOUR EMAIL" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <i className="fas fa-phone"></i>
                                            <input type="text" name="phoneNumber" placeholder="ENTER YOUR PHONE NUMBER" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <i className="fas fa-check"></i>
                                            <input type="text" name="subject" placeholder="ENTER YOUR SUBJECT" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-input">
                                            <i className="fas fa-comment-dots"></i>
                                            <textarea placeholder="ENTER YOUR MESSAGE"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="submit-input text-center">
                                            <input type="submit" name="submit" value="SUBMIT NOW" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default ContactUs;