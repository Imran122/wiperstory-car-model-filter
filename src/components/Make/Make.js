import React from 'react';
import './Make.css'
import advertiseVertical from '../../../src/images/advertise0.jpg'
import { Icon } from '@iconify/react';
import useCarModel from '../../hooks/useCarModel';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const Make = () => {
    const [carlist] = useCarModel()

    const makeList = carlist.map(car => car.Make)


    //unique list is here
    var uniqueList = makeList.filter(function (item, pos) {
        return makeList.indexOf(item) === pos;
    });

    const col1 = uniqueList.slice(0, 30)
    const col2 = uniqueList.slice(30, 60)
    const col3 = uniqueList.slice(60, 90)
    const col4 = uniqueList.slice(90, 120)


    return (
        <>
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h5 className="ex-header-text">
                                WiperStory <Icon icon="ion:chevron-forward-sharp" />
                                Make <Icon icon="ion:chevron-forward-sharp" />



                            </h5>
                        </div>
                    </div>
                </div>
            </header>
            <div className="ex-basic-1 pt-4">
                <div className="container ">
                    <div className="row justify-content-md-center">


                        <div className="col-xl-9 ">


                            <div class="d-flex justify-content-evenly">

                                <div>
                                    {col1.map(car =>
                                        <ul className="text-dark">
                                            <li className="text-dark">{car}</li>

                                        </ul>
                                    )

                                    }
                                </div>
                                <div>
                                    {col2.map(car =>
                                        <ul className="text-dark">
                                            <li className="text-dark">{car}</li>

                                        </ul>
                                    )

                                    }
                                </div>
                                <div>
                                    {col3.map(car =>
                                        <ul className="text-dark">
                                            <li className="text-dark">{car}</li>

                                        </ul>
                                    )

                                    }
                                </div>
                                <div>
                                    {col4.map(car =>
                                        <ul className="text-dark">
                                            <li className="text-dark">{car}</li>

                                        </ul>
                                    )

                                    }
                                </div>

                            </div>

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