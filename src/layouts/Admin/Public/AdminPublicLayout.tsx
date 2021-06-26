import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link, Redirect
} from 'react-router-dom';
import Layout from "./Layout";
import publicRoutes from "../../../routes/Admin";

const AdminPublicLayout = (): JSX.Element => {
    console.log('AdminPublicLayout');
    return (
        <Layout>
            <Router
                basename="/admin"
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

export default AdminPublicLayout;
