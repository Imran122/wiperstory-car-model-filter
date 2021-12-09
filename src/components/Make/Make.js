import React from 'react';
import './Make.css'
import advertiseVertical from '../../../src/images/advertise0.jpg'
import { Icon } from '@iconify/react';
import useCarModel from '../../hooks/useCarModel';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import MakeChild from './MakeChild/MakeChild';
const Make = () => {
    const [carlist] = useCarModel()

    const makeList = carlist.map(car => car.Make)


    //unique list is here
    let uniqueList = [...new Map(carlist.map((item) => [item["Make"], item])).values()];

    console.log('make page', uniqueList.Slugmake)
    /*     const col1 = uniqueList.slice(0, 30)
        const col2 = uniqueList.slice(30, 60)
        const col3 = uniqueList.slice(60, 90)
        const col4 = uniqueList.slice(90, 120) */

    //hyper linking  or dynamic link with company  make name

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

                            <div class="items">
                                {uniqueList.map(company =>
                                    <MakeChild
                                        key={company._id}
                                        company={company}
                                    >

                                    </MakeChild>
                                )}
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