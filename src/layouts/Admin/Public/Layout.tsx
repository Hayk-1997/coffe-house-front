import React from "react";

const Layout = ({ children }: any) => {
    console.log('Layout');
    return (
        <div>
            AuthLayout
            { children }
        </div>
    )
};


export default Layout;