import React from 'react';
import Layout from "../../Admin/Public/Layout";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import publicRoutes from "../../../routes/CoffeeHouse";

const CoffeeHousePublicLayout = ():JSX.Element => {
    console.log('CoffeeHousePublicLayout');
    return (
        <Layout>
            <Router
                basename="/coffee-house"
            >
                <Link to="/register">Register</Link>{' '}
                <Link to="/login">Login</Link>
                <Switch>
                    {
                        publicRoutes.map((route) => {
                            const Component = route.component;
                            return (
                                <Route
                                    path={route.path}
                                    key={route.path}
                                    render={(route) => <Component />}
                                />
                            )
                        })
                    }
                    <Redirect to="/login" />
                </Switch>
            </Router>
        </Layout>
    )
};

export default CoffeeHousePublicLayout;