import React, { useState } from 'react';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://testapi.wiperstory.com/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)

                }
                e.target.reset()


            })
        e.preventDefault();
    }

    return (
        <>


            <div className="container makeadmin-main mt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow">
                            <div className="card-title text-center border-bottom">
                                <h2 className="p-3">Make Admin</h2>
                                {success &&
                                    <div className="alert alert-success" role="alert">
                                        successfully made admin
                                    </div>
                                }
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleAdminSubmit}>
                                    <div className="mb-4">
                                        <label for="email" className="form-label">Username/Email</label>
                                        <input type="email" name="email" className="form-control" id="username" onBlur={handleOnBlur}
                                            placeholder="Email address" required />
                                    </div>


                                    <div className="d-grid">
                                        <button type="submit" className="btn text-light main-bg">Make Admin</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MakeAdmin;