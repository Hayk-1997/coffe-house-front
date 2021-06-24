import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import React from "react";

const CoffeeHouseLayout = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/coffee/home" render={() => <div>CoffeeHouse-Home</div>}/>
            <Redirect to='/coffee/home' />
            <Route path="/coffee/*">
                <div>No Match</div>
            </Route>
        </Switch>
    )
};

export default CoffeeHouseLayout;