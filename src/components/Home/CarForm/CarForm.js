import React from 'react';
import './CarForm.css'
const CarForm = () => {
    return (
        <div>
            <section className="call-action">
                <div className="container">
                    <div className="inner-content">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-12 col-md-12 col-12 w-50">

                                <div className="form-body">
                                    <div className="row">
                                        <div className="form-holder">
                                            <div className="form-content">
                                                <div className="form-items text-center">
                                                    <h2>Welcome to size my wipers!</h2>
                                                    <p>To get started, choose a make and model of vehicle..</p>
                                                    <form className="requires-validation">


                                                        <h5>Make and Model</h5>
                                                        <div className="col-md-12">
                                                            <select className="form-select mt-3" required>

                                                                <option value="jweb">Junior Web Developer</option>
                                                                <option value="sweb">Senior Web Developer</option>
                                                                <option value="pmanager">Project Manager</option>
                                                            </select>

                                                        </div>
                                                        <div className="col-md-12">
                                                            <select className="form-select mt-3" required>

                                                                <option value="jweb">Junior Web Developer</option>
                                                                <option value="sweb">Senior Web Developer</option>
                                                                <option value="pmanager">Project Manager</option>
                                                            </select>

                                                        </div>
                                                        <div className="col-md-12">
                                                            <select className="form-select mt-3" required>
                                                                {/*  <option selected disabled value="">Position</option> */}
                                                                <option value="jweb">Junior Web Developer</option>
                                                                <option value="sweb">Senior Web Developer</option>
                                                                <option value="pmanager">Project Manager</option>
                                                            </select>

                                                        </div>








                                                        <div className="form-button mt-3">
                                                            <button id="submit" type="submit" className="btn btn-primary">SHOW NAME</button>
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

export default CarForm;