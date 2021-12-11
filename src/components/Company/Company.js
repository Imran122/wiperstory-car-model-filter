import React, { useEffect, useState } from 'react';
import './Company.css'
import { Icon } from '@iconify/react';
import advertiseVertical from '../../../src/images/advertise0.jpg'
import useCarModel from '../../hooks/useCarModel';
import { useParams } from 'react-router';
import CompanyChild from './CompanyChild/CompanyChild';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const Company = () => {

    //this is the model show components

    const [carlist] = useCarModel()
    const makeList = carlist.map(car => car.Make)
    const [companyData, setCompanyData] = useState([])
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/carlist/${id}`)
            .then(response => response.json())
            .then(data => setCompanyData(data))
    }, [])

    return (
        <>
            <Helmet title={`make/${id}`}
                htmlAttributes={{ lang: "en" }}
                meta={[
                    {
                        name: `og:title`,
                        content: `make/${id}`,
                    },
                    {
                        name: `og:description`,
                        content: ` View the ${id} undefined Wiper Size Chart right here. We have the best wiper size information available for all models.`,
                    },
                ]}
            />

            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h5 className="ex-header-text">
                                <Link className="text-light text-decoration-none" to="/home"> WIPER STORY <Icon icon="ion:chevron-forward-sharp" /></Link>

                                <Link className="text-light text-decoration-none" to="/make">MAKE <Icon icon="ion:chevron-forward-sharp" /></Link>

                                {id.toUpperCase()} <Icon icon="ion:chevron-forward-sharp" />


                            </h5>
                        </div>
                    </div>
                </div>
            </header>

            <div className="ex-basic-1 pt-4">
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-xl-9 ">
                            <h2 className="text-center mt-3 text-uppercase">Choose a {id.toUpperCase()} Model CAR</h2>
                            <div class="items">
                                {companyData.map(company =>
                                    <CompanyChild
                                        key={company._id}
                                        company={company}
                                    >

                                    </CompanyChild>
                                )}
                            </div>




                        </div>
                        <div className="col-xl-3 text-center">
                            <img className="mx-auto" src={advertiseVertical} alt="" />



                        </div>
                    </div>
                </div>
            </div>


            {/* car data show start */}
            <h5 className="text-center mt-3 text-uppercase">List of  {id.toUpperCase()} CAR with year</h5>
            <div className="ex-basic-1 pt-4">
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12 ">

                            <div class="items">
                                {companyData.map(allcar =>
                                    <div className="item" key={allcar._id}>


                                        <p className=" text-dark h-5" variant="outline-secondary"><Icon icon="ph:arrow-fat-lines-right-fill" /> {allcar.Car}</p>


                                    </div>
                                )
                                }
                            </div>




                        </div>

                    </div>
                </div>
            </div>

            {/*  car data show end */}
        </>
    );
};

export default Company;