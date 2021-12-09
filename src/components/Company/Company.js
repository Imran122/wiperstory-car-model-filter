import React, { useEffect, useState } from 'react';
import './Company.css'
import { Icon } from '@iconify/react';
import advertiseVertical from '../../../src/images/advertise0.jpg'
import useCarModel from '../../hooks/useCarModel';
import { useParams } from 'react-router';
import CompanyChild from './CompanyChild/CompanyChild';
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
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h5 className="ex-header-text">
                                WiperStory <Icon icon="ion:chevron-forward-sharp" />
                                By Make <Icon icon="ion:chevron-forward-sharp" />
                                {id} <Icon icon="ion:chevron-forward-sharp" />


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
        </>
    );
};

export default Company;