import React from 'react';
import { Col, Container, Form, FormSelect, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {

    return (
        <div className="banner-content">

            <section class="call-action">
                <div class="container">
                    <div class="inner-content">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-12 col-md-12 col-12 w-50">

                                <div class="form-body">
                                    <div class="row">
                                        <div class="form-holder">
                                            <div class="form-content">
                                                <div class="form-items text-center">
                                                    <h2>Welcome to size my wipers!</h2>
                                                    <p>To get started, choose a make and model of vehicle..</p>
                                                    <form class="requires-validation" novalidate>


                                                        <h5>Make and Model</h5>
                                                        <div class="col-md-12">
                                                            <select class="form-select mt-3" required>
                                                                <option selected disabled value="">Position</option>
                                                                <option value="jweb">Junior Web Developer</option>
                                                                <option value="sweb">Senior Web Developer</option>
                                                                <option value="pmanager">Project Manager</option>
                                                            </select>

                                                        </div>
                                                        <div class="col-md-12">
                                                            <select class="form-select mt-3" required>
                                                                <option selected disabled value="">Position</option>
                                                                <option value="jweb">Junior Web Developer</option>
                                                                <option value="sweb">Senior Web Developer</option>
                                                                <option value="pmanager">Project Manager</option>
                                                            </select>

                                                        </div>
                                                        <div class="col-md-12">
                                                            <select class="form-select mt-3" required>
                                                                <option selected disabled value="">Position</option>
                                                                <option value="jweb">Junior Web Developer</option>
                                                                <option value="sweb">Senior Web Developer</option>
                                                                <option value="pmanager">Project Manager</option>
                                                            </select>

                                                        </div>








                                                        <div class="form-button mt-3">
                                                            <button id="submit" type="submit" class="btn btn-primary">SHOW NAME</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;