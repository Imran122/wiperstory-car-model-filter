import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'
const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth()
    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);


    }
    //submittting register data
    const handelLogInSubmit = e => {
        if (registerData.password !== registerData.password2) {

            return;
        }
        //submittting user info by form
        registerUser(registerData.email, registerData.password, registerData.name)

        e.preventDefault();
    }


    return (
        <div>
            <div className="wrapper">
                <div className="login-container">
                    <div className="col-left">
                        <div className="login-text">
                            <h2>WiperStory</h2>
                            {isLoading &&
                                <div class="spinner-main">
                                    <div class="loader-circle"></div>
                                </div>
                            }

                        </div>
                    </div>
                    <div className="col-right">
                        <div className="login-form">
                            <h2>SignUp</h2>
                            {/*  after usewr creating succes message show */}
                            {user?.email &&
                                <div class="alert alert-success" role="alert">
                                    successfully created user
                                </div>
                            }
                            {/* if there is error the it will work */}
                            {authError &&
                                <div class="alert alert-danger" role="alert">
                                    {authError}
                                </div>
                            }


                            {!isLoading &&

                                <form onSubmit={handelLogInSubmit}>
                                    <p>
                                        <input type="text" name="name" onBlur={handelOnBlur} placeholder="You User Name" required />
                                    </p>
                                    <p>
                                        <input type="email" name="email" onBlur={handelOnBlur} placeholder="You Email" required />
                                    </p>
                                    <p>
                                        <input type="password" onBlur={handelOnBlur} name="password" placeholder="Type Password" required />
                                    </p>
                                    <p>
                                        <input type="password" onBlur={handelOnBlur} name="password2" placeholder="Retype Password" required />
                                    </p>
                                    <p>
                                        <input className="btn" type="submit" value="SingUp" />
                                    </p>
                                    <p>
                                        <Link to="/login">
                                            <a>Already have account?</a>
                                        </Link>

                                    </p>
                                </form>
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;