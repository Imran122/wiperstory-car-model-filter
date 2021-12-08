import React, { useEffect, useState } from 'react';
import './CarModel.css'
import { Icon } from '@iconify/react';
import advertiseVertical from '../../../src/images/advertise0.jpg'
import useCarModel from '../../hooks/useCarModel';
import { useParams } from 'react-router';
const CarModel = ({ allCarData }) => {
    const [carlist] = useCarModel()
    const makeList = carlist.map(car => car.Make)
    const [companyData, setCompanyData] = useState([])
    const { id, carmodel } = useParams();
    console.log(allCarData)

    useEffect(() => {
        fetch(`http://localhost:5000/carlist/${id}/${carmodel}`)
            .then(response => response.json())
            .then(data => setCompanyData(data))
    }, [])

    return (
        <>
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h5 className="ex-header-text">
                                WiperStory <Icon icon="ion:chevron-forward-sharp" />
                                {id} <Icon icon="ion:chevron-forward-sharp" />
                                {carmodel} <Icon icon="ion:chevron-forward-sharp" />


                            </h5>
                        </div>
                    </div>
                </div>
            </header>

            <div className="ex-basic-1 pt-4">
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-xl-9 ">

                            <table className="customer-table">

                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Driver</th>
                                        <th>Passenger Side</th>
                                        <th>Rear</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {companyData.map(company =>
                                        <tr>
                                            <th>{company.Year}</th>
                                            <td>{company.Driver}</td>
                                            <td>{company.Pass}</td>
                                            <td>{company.Rear}</td>

                                        </tr>
                                    )}





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

export default CarModel;