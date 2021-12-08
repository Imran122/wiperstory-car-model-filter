
import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";





const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth()

    if (isLoading) {
        return <div class="spinner-main">
            <div class="loader-circle"></div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;