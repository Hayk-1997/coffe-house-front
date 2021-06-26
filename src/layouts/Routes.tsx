import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';
// import {routesTemplates} from "../../routes/Admin";
// import publicRoutes from "../../routes/Admin/public";

const Routes = ():JSX.Element => {
    return (
        <div>
            <Router>
                <Switch>
                    {/*{*/}
                    {/*    routesTemplates.map((routesTemplate) => {*/}
                    {/*        const { routes: appRoutes, template: Template } = routesTemplate;*/}
                    {/*        return appRoutes.map((appRoute) => {*/}
                    {/*            const Component = appRoute.component*/}
                    {/*            return (*/}
                    {/*                <Route*/}
                    {/*                    path={appRoute.path}*/}
                    {/*                    key={appRoute.path}*/}
                    {/*                    render={(route) => {*/}
                    {/*                        return (*/}
                    {/*                            <Component route={route}/>*/}
                    {/*                        )*/}
                    {/*                    }}*/}
                    {/*                />*/}
                    {/*            )*/}
                    {/*        });*/}
                    {/*    })*/}
                    {/*}*/}
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