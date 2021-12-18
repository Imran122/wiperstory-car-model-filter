import React from 'react';
import './Service.css'
import { Icon } from '@iconify/react';
const Service = () => {
    return (
        <>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        <h3>We do offer awesome <span>Services</span></h3>
                        <p>promises is our strategy and quality of service is our commitment.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box">
                                <div className="icon">
                                    <Icon icon="mdi:account-child-circle" width="50" height="50" />
                                </div>
                                <h4 className="title"><a href="">Car Chice Plan</a></h4>
                                <p className="description">You can make your choice by your own. we have various car model in our website</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box">
                                <div className="icon">
                                    <Icon icon="mdi:account-child-circle" width="50" height="50" />
                                </div>
                                <h4 className="title"><a href="">Car Rent</a></h4>
                                <p className="description">We provide car rental service.You can rent car from us at any time from any places.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box">
                                <div className="icon">
                                    <Icon icon="mdi:account-child-circle" width="50" height="50" />
                                </div>
                                <h4 className="title"><a href="">Car Sell</a></h4>
                                <p className="description">We sell qualityful car and car instruments in our website. You will get the best quality car and car instruments from us.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box">
                                <div className="icon">
                                    <Icon icon="mdi:account-child-circle" width="50" height="50" />
                                </div>
                                <h4 className="title"><a href="">Car Wash</a></h4>
                                <p className="description">We have garage also.We provide car service and wash for your car.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Service;