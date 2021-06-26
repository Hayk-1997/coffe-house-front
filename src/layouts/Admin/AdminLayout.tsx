import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Routes from "./Routes";

const AdminLayout = (): JSX.Element => (
    <div>
        <Switch>
            {/*<Redirect to="/admin/home" />*/}
            <Routes />
        </Switch>
    </div>
);

export default AdminLayout;
