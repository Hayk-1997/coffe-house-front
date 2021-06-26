import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';
import {routesTemplates} from "../../routes/Admin";

const Routes = ():JSX.Element => {
    return (
        <div>
            <Router>
                <Switch>
                    {
                        routesTemplates.map((routesTemplate) => {
                            const { routes: appRoutes, template: Template } = routesTemplate;
                            return appRoutes.map((appRoute) => (
                                <Route
                                    path={appRoute.path}
                                    key={appRoute.path}
                                    render={(route) => {
                                        return (
                                            <Template
                                                Component={appRoute.component}
                                                route={route}/>
                                        )
                                    }}
                                />
                            ));
                        })
                    }
                    <Redirect to="/admin/login" />
                    <Route
                        render={(route) => (
                           <div>Not found</div>
                        )}
                    />
                </Switch>
            </Router>
        </div>
    )
};

export default Routes;