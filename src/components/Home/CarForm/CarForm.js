import React, { useEffect, useState } from 'react';
import useCarModel from '../../../hooks/useCarModel';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './CarForm.css'
import { useParams } from 'react-router';
const CarForm = () => {
    const history = useHistory()
    const [carlist] = useCarModel()
    const [allCarData, setAllCarData] = useState([])
    //console.log(carlist)
    const [selectData, setSelectData] = useState('')
    const handleOnBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;
        const newSelectData = { ...selectData };
        newSelectData[field] = value;
        console.log(newSelectData)
        setSelectData(newSelectData);
        e.preventDefault();

    }


    //unique array list making list is here

    let uniqueList = [...new Map(carlist.map((item) => [item["Make"], item])).values()];


    // console.log('uniq', uniqueList);
    //dependent option work
    //dependent car model code

    let particularMake = selectData.make;
    //console.log('particular make', particularMake)
    const dependentModelData = carlist.filter(list => particularMake === list.Make)

    console.log("dependent model data", dependentModelData)





    //uniqe list is using for make dropdown
    var uniqemakedata = carlist.find(obj => obj.Make === selectData.make)


    //console.log("my uniqe make data", uniqemakedata)
    //finind the exact model slug from db
    var uniqemodeldata = carlist.find(obj => obj.Model === selectData.model)
    //find unique model)

    let uniquemodelList = [...new Map(dependentModelData.map((item) => [item["Model"], item])).values()];
    const modelList = uniquemodelList.filter(car => car.Model)
    console.log(' uniqueModelList ', modelList)
    const nextPage = () => {

        history.push(`make/${uniqemakedata.Slugmake}/${uniqemodeldata.Slugmodel}`)

    }

    const handleDataSubmit = (e) => {

        e.preventDefault();

    }



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
                                                    <form onSubmit={handleDataSubmit} className="requires-validation">


                                                        <h5>Make and Model</h5>
                                                        <div className="col-md-12">
                                                            <select onChange={handleOnBlur} name="make" className="form-select mt-3 text-dark" required>
                                                                <option selected value="">Make</option>
                                                                {
                                                                    uniqueList.map(car =>
                                                                        <option key={car._id} value={car.Make}>{car.Make} </option>
                                                                    )
                                                                }


                                                            </select>

                                                        </div>

                                                        <div className="col-md-12">
                                                            <select onChange={handleOnBlur} name="model" className="form-select mt-3" required>
                                                                <option selected value="">Model</option>
                                                                {
                                                                    modelList.map(modelData =>

                                                                        <option key={modelData._id} value={modelData.Model} required>

                                                                            {modelData.Model}

                                                                        </option>
                                                                    )
                                                                }

                                                            </select>

                                                        </div>

                                                        {/*    <div className="col-md-12">
                                                            <select onChange={handleOnBlur} name="year" className="form-select mt-3" >
                                                                <option selected disabled value="">Year</option>
                                                                {
                                                                    dependentModelData.map(car =>
                                                                        <option key={car._id} value={car.Year}>{car.Year}</option>
                                                                    )
                                                                }

                                                            </select>

                                                        </div> */}







                                                        <div className="form-button mt-3">
                                                            <button onClick={nextPage} id="submit" type="submit" className="btn btn-primary">SHOW {particularMake}</button>
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