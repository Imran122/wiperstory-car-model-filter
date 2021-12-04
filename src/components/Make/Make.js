import React from 'react';
import './Make.css'
import advertiseVertical from '../../../src/images/advertise0.jpg'
import { Icon } from '@iconify/react';
const Make = () => {
    return (
        <>
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h5 className="ex-header-text">
                                WiperStory <Icon icon="ion:chevron-forward-sharp" />
                                By Make <Icon icon="ion:chevron-forward-sharp" />
                                model name <Icon icon="ion:chevron-forward-sharp" />


                            </h5>
                        </div>
                    </div>
                </div>
            </header>
            <div className="ex-basic-1 pt-4">
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-xl-9 ">

                            <table class="customer-table">

                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th>Joann Hayes</th>
                                        <td>joann.hayes@example.com</td>
                                        <td>(867)-246-3097</td>
                                    </tr>
                                    <tr>
                                        <th>Cassandra Hart</th>
                                        <td>cassandra.hart@example.com</td>
                                        <td>(768)-258-3934</td>
                                    </tr>
                                    <tr>
                                        <th>Thomas Willis</th>
                                        <td>thomas.willis@example.com</td>
                                        <td>(405)-864-3173</td>
                                    </tr>
                                    <tr>
                                        <th>Daryl Moore</th>
                                        <td>daryl.moore@example.com</td>
                                        <td>(819)-432-0779</td>
                                    </tr>
                                    <tr>
                                        <th>Noelle May</th>
                                        <td>noelle.may@example.com</td>
                                        <td>(869)-133-6465</td>
                                    </tr>
                                    <tr>
                                        <th>Connor Richardson</th>
                                        <td>connor.richardson@example.com</td>
                                        <td>(314)-389-5440</td>
                                    </tr>
                                    <tr>
                                        <th>Jeremiah Steeves</th>
                                        <td>jeremiah.steeves@example.com</td>
                                        <td>(874)-376-2306</td>
                                    </tr>
                                </tbody>
                            </table>




                        </div>


                        <div className="col-xl-3 text-center">
                            <img className="mx-auto" src={advertiseVertical} alt="" />



                        </div>
                    </div>
                </div>
            </div>





        </>
    );
};

export default Make;