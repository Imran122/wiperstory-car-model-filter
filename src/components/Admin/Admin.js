import React from 'react';
import './Admin.css'
const Admin = () => {
    return (
        <div>
            <div class="admin-form-wrapper">
                <div class="container-admin">
                    <div class="col-left-admin">
                        <div class="admin-text">
                            <h2>Welcome Back</h2>


                        </div>
                    </div>
                    <div class="col-right-admin">
                        <div class="admin-form">
                            <h2>Full The Form</h2>
                            <form>
                                <p>
                                    <label>Username or email address<span>*</span></label>
                                    <input type="text" placeholder="Username or Email" required />
                                </p>
                                <p>
                                    <label>Password<span>*</span></label>
                                    <input type="password" placeholder="Password" required />
                                </p>
                                <p>
                                    <input type="submit" value="Sing In" />
                                </p>
                                <p>
                                    <a href="">Forget Password?</a>
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