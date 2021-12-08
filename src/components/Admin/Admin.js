import React, { useState } from 'react';
import './Admin.css'
const Admin = () => {
    const [dataInfo, setDataInfo] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...dataInfo };
        newData[field] = value;
        setDataInfo(newData)



    }
    //send  data to the DB
    const dataSubmit = e => {
        const newDataInfo = { ...dataInfo }

        fetch('http://localhost:5000/uploaddata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDataInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {

                    e.target.reset()

                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div class="admin-form-wrapper mb-5">
                <div class="container-admin">
                    <div class="col-left-admin">
                        <div class="admin-text">
                            <h2>Welcome Back</h2>


                        </div>
                    </div>
                    <div class="col-right-admin">
                        <div class="admin-form">
                            <h2>Fill The Form</h2>
                            <form onSubmit={dataSubmit}>
                                <p>
                                    <label>Make Name<span>*</span></label>
                                    <input onBlur={handleOnBlur} type="text" name="Make" placeholder="type Make Name" required />
                                </p>
                                <p>
                                    <label>Model Name<span>*</span></label>
                                    <input onBlur={handleOnBlur} type="text" name="Model" placeholder="type Model" required />
                                </p>
                                <p>
                                    <label>Year<span>*</span></label>
                                    <input onBlur={handleOnBlur} type="text" name="Year" placeholder="type Year" required />
                                </p>
                                <p>
                                    <label>Car<span>*</span></label>
                                    <input onBlur={handleOnBlur} type="text" name="Car" placeholder="type Car" required />
                                </p>
                                <p>
                                    <label>Driver<span>*</span></label>
                                    <input onBlur={handleOnBlur} type="text" name="Driver" placeholder="type Driver" required />
                                </p>
                                <p>
                                    <label>Passenger<span>*</span></label>
                                    <input onBlur={handleOnBlur} type="text" name="Pass" placeholder="type Passenger" required />
                                </p>
                                <p>
                                    <label>Rear<span>*</span></label>
                                    <input onBlur={handleOnBlur} type="text" name="Rear" placeholder="type Rear" required />
                                </p>
                                <p>
                                    <input type="submit" value="Submit" />
                                </p>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Admin;