import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import CoffeeHouseLayout from "./layouts/CoffeeHouseLayout";
import AdminLayout from "./layouts/Admin/AdminLayout";

const App = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route path="/coffee" component={CoffeeHouseLayout} />
                <Route path='/admin' component={AdminLayout} />
                <Route path="/*">
                    <div>No Match</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
