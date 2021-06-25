import React from "react";
import LayoutPageProperties from "../../../interfaces/template/LayoutPageProperties";


const AuthLayout = ({ Component, route }: LayoutPageProperties) => {
    return (
        <div>
            AuthLayout
            <Component route={route} />
        </div>
    )
};

export default AuthLayout;