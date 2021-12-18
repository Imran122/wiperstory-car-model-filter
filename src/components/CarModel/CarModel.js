import React, { useEffect, useState } from 'react';
import './CarModel.css'
import { Icon } from '@iconify/react';
import advertiseVertical from '../../../src/images/advertise0.jpg'
import useCarModel from '../../hooks/useCarModel';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const CarModel = () => {
    const [carlist] = useCarModel()
    const makeList = carlist.map(car => car.Car)
    const [companyData, setCompanyData] = useState([])
    const { id, carmodel } = useParams();


    useEffect(() => {

        fetch(`https://car-make-project.herokuapp.com/carlist/${id}/${carmodel}`)
            .then(response => response.json())
            .then(data => setCompanyData(data))

    }, [])

    return (
        <>
            <Helmet title={`${id} ${carmodel} wiper size guide`}
                htmlAttributes={{ lang: "en" }}
                meta={[
                    {
                        name: `og:title`,
                        content: `make/${id}/${carmodel}`,
                    },
                    {
                        name: `og:description`,
                        content: ` View the ${id} ${carmodel} undefined Wiper Size Chart right here. We have the best wiper size information available for all models.`,
                    },
                ]}
            />
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h5 className="ex-header-text">
                                <Link className="text-light text-decoration-none" to="/home"> HOME<Icon icon="ion:chevron-forward-sharp" /></Link>
                                <Link className="text-light text-decoration-none" to="/make">MAKE <Icon icon="ion:chevron-forward-sharp" /></Link>
                                <Link className="text-light text-decoration-none" to={`/make/${id}`}> {id.toUpperCase()} <Icon icon="ion:chevron-forward-sharp" /></Link>

                                {carmodel.toUpperCase()} <Icon icon="ion:chevron-forward-sharp" />



                            </h5>
                        </div>
                    </div>
                </div>
            </header>

            <div className="ex-basic-1 pt-4">
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-xl-9 ">
                            <h3 className="text-center mt-3 text-uppercase">{id}  Homes {carmodel} Wiper Size Chart</h3>
                            <table className="customer-table">

                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Driver Side</th>
                                        <th>Passenger Side</th>
                                        <th>Rear</th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {companyData.map(company =>
                                        <tr>
                                            <th>{company.Year}</th>
                                            <td>{company.Driver}"</td>
                                            <td>{company.Pass}"</td>
                                            {company.Rear &&
                                                <td>{company.Rear}"</td>
                                            }



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
            {/* show car info data */}

            {/* end show car info data */}
        </>
    );

};

export default CarModel;