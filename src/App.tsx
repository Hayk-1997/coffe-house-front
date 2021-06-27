import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AdminLayout from './layouts/Admin/AdminLayout';
import CoffeeHouseLayout from './layouts/CoffeeHouse/CoffeeHouseLayout';

const App:React.FC = () => (
  <Router>
    <Switch>
      <Route path="/admin" component={AdminLayout} />
      <Route path="/coffee-house" component={CoffeeHouseLayout} />
      <Route path="/*">
        <div>No Match</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
