import React from "react";
import LayoutPageProperties from "../../../interfaces/template/LayoutPageProperties";
import {Link} from "react-router-dom";

const AuthLayout = ({ Component, route }: LayoutPageProperties) => {
    return (
        <div>
            AuthLayout
            <Link to="/admin/register">Register</Link>
            <Component route={route} />
        </div>
    )
};


export default AuthLayout;