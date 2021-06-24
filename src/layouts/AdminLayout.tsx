import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const AdminLayout = (): JSX.Element => {
    return (
        <Switch>
            <Route path={'/admin/home'} render={() => <div>Admin-Home</div>}/>
            <Redirect to='/admin/home' />
            <Route path="/admin/*">
                <div>No Match</div>
            </Route>
        </Switch>
    )
};

export default AdminLayout;